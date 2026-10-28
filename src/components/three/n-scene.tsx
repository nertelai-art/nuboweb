'use client';

// La N de Nubo en 3D, del logo de debò: cada cinta és la seva zona visible
// mesurada sobre el PNG (nubo-geometry.ts), extrudida, i la cara del davant
// porta la N retallada del mateix PNG com a textura. Colors i degradats són
// exactament els del logo: material sense llum (MeshBasicMaterial) i sense
// tone mapping. Els cantells, el color de la cinta enfosquit, donen el volum.
// Les cintes entren volant, formen la N, la N es fa petita al centre de
// l'esquema i, quan l'agent «parla», en surten ones de veu.

import { PerformanceMonitor, Preload, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import {
  Color,
  ExtrudeGeometry,
  MathUtils,
  MeshBasicMaterial,
  Shape,
  SRGBColorSpace,
  type Group,
  type Mesh,
  type Texture,
} from 'three';
import {
  N_SIZE,
  RIBBON_COLORS,
  ribbonPoints,
  type Ribbon as RibbonName,
} from '@/components/layout/nubo-geometry';
import { N_PHASES, phase } from './n-phases';

export type NSceneProps = { progress: RefObject<number>; reducedMotion: boolean; compact: boolean };

const SMOOTHING = 4.5;
const MAX_DELTA = 1 / 30;
const FOV = 30;
const DISTANCE = 12;
const UNIT = 175; // px del logo per unitat
const N_W = N_SIZE.width / UNIT;
const N_H = N_SIZE.height / UNIT;
const DEPTH = 0.32;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t: number) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Polígon del logo (px, y cap avall) → `Shape` de three (unitats, y cap amunt, centrada). */
function ribbonShape(name: RibbonName) {
  const shape = new Shape();
  ribbonPoints(name).forEach(([px, py], i) => {
    const x = px / UNIT - N_W / 2;
    const y = (N_SIZE.height - py) / UNIT - N_H / 2;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();
  return shape;
}

/**
 * Les tapes de l'extrusió reben com a UV les coordenades de la forma; amb
 * aquest `repeat`/`offset` cada punt de la cara agafa el seu píxel del PNG.
 */
function useLogoTexture() {
  const texture = useTexture('/brand/nubo-n.png') as Texture;
  return useMemo(() => {
    const map = texture.clone();
    map.colorSpace = SRGBColorSpace;
    map.repeat.set(1 / N_W, 1 / N_H);
    map.offset.set(0.5, 0.5);
    map.anisotropy = 4;
    map.needsUpdate = true;
    return map;
  }, [texture]);
}

// D'on surt cada cinta, com gira mentre vola i a quina profunditat queda.
const RIBBONS = [
  { key: 'blue', from: [-7, -4, 3], spin: [0.8, 2.4, -1.4], z: 0, delay: 0 },
  { key: 'teal', from: [0, 6, -5], spin: [-2.6, 0.6, 1.8], z: 0.03, delay: 0.14 },
  { key: 'lime', from: [7.5, 2.5, 2], spin: [1.2, -2.6, 0.9], z: 0, delay: 0.28 },
] as const;

function Ribbon({
  index,
  smooth,
  map,
}: {
  index: number;
  smooth: RefObject<number>;
  map: Texture;
}) {
  const ribbon = RIBBONS[index]!;
  const mesh = useRef<Mesh>(null);
  const geometry = useMemo(
    () => new ExtrudeGeometry(ribbonShape(ribbon.key), { depth: DEPTH, bevelEnabled: false }),
    [ribbon],
  );
  // [tapes, cantells]: la cara amb el logo i els costats d'un sol color, més fosc.
  const materials = useMemo(
    () => [
      new MeshBasicMaterial({ map, toneMapped: false, alphaTest: 0.4 }),
      new MeshBasicMaterial({
        color: new Color(RIBBON_COLORS[ribbon.key].base).multiplyScalar(0.62),
        toneMapped: false,
      }),
    ],
    [map, ribbon],
  );
  useEffect(
    () => () => {
      geometry.dispose();
      materials.forEach((material) => material.dispose());
    },
    [geometry, materials],
  );

  useFrame(() => {
    const m = mesh.current;
    if (!m) return;
    const assemble = phase(smooth.current ?? 0, N_PHASES.assemble);
    // Cada cinta té el seu tram dins de l'entrada: esglaonades.
    const t = MathUtils.clamp((assemble - ribbon.delay) / (1 - ribbon.delay - 0.1), 0, 1);
    const rest = 1 - easeOutCubic(t);
    // La cara del davant queda a z = 0; l'extrusió va cap enrere.
    m.position.set(
      ribbon.from[0] * rest,
      ribbon.from[1] * rest,
      ribbon.z - DEPTH + ribbon.from[2] * rest,
    );
    m.rotation.set(ribbon.spin[0] * rest, ribbon.spin[1] * rest, ribbon.spin[2] * rest);
    m.scale.setScalar(MathUtils.lerp(0.5, 1, easeOutBack(t)));
  });

  return <mesh ref={mesh} geometry={geometry} material={materials} />;
}

function Ribbons({ smooth }: { smooth: RefObject<number> }) {
  const map = useLogoTexture();
  return (
    <>
      {RIBBONS.map((ribbon, index) => (
        <Ribbon key={ribbon.key} index={index} smooth={smooth} map={map} />
      ))}
    </>
  );
}

const WAVES = [0, 1, 2, 3];
const WAVE_COLORS = ['#2160af', '#12978f', '#88c023', '#12978f'];

function Choreography({ progress, reducedMotion, compact }: NSceneProps) {
  const group = useRef<Group>(null);
  const waves = useRef<(Mesh | null)[]>([]);
  const smooth = useRef(reducedMotion ? 1 : (progress.current ?? 0));
  const { invalidate, viewport, camera } = useThree();

  useEffect(() => {
    const onScroll = () => invalidate();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [invalidate]);

  useFrame((_, rawDelta) => {
    const target = reducedMotion ? 1 : (progress.current ?? 0);
    smooth.current = MathUtils.damp(
      smooth.current,
      target,
      SMOOTHING,
      Math.min(rawDelta, MAX_DELTA),
    );
    if (Math.abs(smooth.current - target) < 0.0005) smooth.current = target;
    else invalidate();
    const p = smooth.current;

    camera.position.set(0, 0, DISTANCE);
    camera.lookAt(0, 0, 0);

    // Mida a partir de l'espai visible: gran mentre es munta, petita com a agent.
    const tan = Math.tan(MathUtils.degToRad(FOV / 2));
    const visibleH = 2 * tan * DISTANCE;
    const visibleW = visibleH * viewport.aspect;
    const fit = (fracH: number, fracW: number) =>
      Math.min((visibleH * fracH) / N_H, (visibleW * fracW) / N_W);
    const big = fit(0.72, 0.8);
    const small = compact ? fit(0.3, 0.42) : fit(0.36, 0.22);
    const shrink = easeInOut(phase(p, N_PHASES.shrink));
    const settle = easeInOut(phase(p, N_PHASES.settle));

    const g = group.current;
    if (g) {
      g.scale.setScalar(MathUtils.lerp(big, small, shrink));
      g.rotation.set(
        MathUtils.lerp(0.28, 0.06, shrink) * (1 - settle),
        MathUtils.lerp(-0.55, -0.25, shrink) * (1 - settle),
        0,
      );
    }

    // Ones de veu: anells que surten de la N un rere l'altre mentre «parla».
    const w = phase(p, N_PHASES.waves);
    waves.current.forEach((ring, i) => {
      if (!ring) return;
      const local = (w * 2.2 + i * 0.25) % 1;
      const on = w > 0 && w < 1;
      ring.scale.setScalar(MathUtils.lerp(1.15, 3.1, easeOutCubic(local)));
      (ring.material as MeshBasicMaterial).opacity = on ? (1 - local) * 0.7 : 0;
    });
  });

  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <Ribbons smooth={smooth} />
      </Suspense>
      {WAVES.map((i) => (
        <mesh
          key={i}
          ref={(node) => {
            waves.current[i] = node;
          }}
          position={[0, 0, -0.3]}
        >
          <torusGeometry args={[1.25, 0.018, 8, 120]} />
          <meshBasicMaterial color={WAVE_COLORS[i]} transparent opacity={0} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

export default function NScene(props: NSceneProps) {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas
      frameloop="demand"
      dpr={dpr}
      camera={{ position: [0, 0, DISTANCE], fov: FOV }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      resize={{ scroll: false, debounce: { scroll: 0, resize: 150 } }}
      aria-hidden="true"
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(1.5)}
        flipflops={3}
        onFallback={() => setDpr(1)}
      />
      <Choreography {...props} />
      <Preload all />
    </Canvas>
  );
}

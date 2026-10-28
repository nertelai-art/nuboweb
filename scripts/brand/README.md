# Eines de marca

Python sense dependències (`python -I`), per refer els fitxers de marca a partir del
logo oficial de Nubo Telecom (`Logo-Nubo-Telecom.png`, 1794×566, de nubotelecom.com).

- `recolor_png.py logo.png public/brand/nubo-telecom-dark.png 0c1a2e`: el logo amb
  el text fosc, per al tema clar.
- `n_measure.py logo.png public/brand/nubo-n.png n-rows.json`: retalla la N i mesura
  fila a fila la zona visible de cada cinta.
- `gen_shapes.py n-rows.json src/components/layout/nubo-shapes.ts`: en fa els
  polígons que fan servir l'escena 3D i el logo de Nubo IA.

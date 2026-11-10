/**
 * Durada d'un MP3 de bitrate constant (com els d'ElevenLabs), sense dependències:
 * es salta l'etiqueta ID3, llegeix la capçalera del primer frame i divideix.
 */
const BITRATES_V1_L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];

export function mp3DurationMs(data: Uint8Array) {
  let offset = 0;
  if (data[0] === 0x49 && data[1] === 0x44 && data[2] === 0x33) {
    // ID3v2: mida en 4 bytes de 7 bits, més la capçalera de 10.
    const size =
      ((data[6]! & 0x7f) << 21) |
      ((data[7]! & 0x7f) << 14) |
      ((data[8]! & 0x7f) << 7) |
      (data[9]! & 0x7f);
    offset = 10 + size;
  }
  while (
    offset < data.length - 4 &&
    !(data[offset] === 0xff && (data[offset + 1]! & 0xe0) === 0xe0)
  ) {
    offset += 1;
  }
  const kbps = BITRATES_V1_L3[(data[offset + 2]! >> 4) & 0x0f];
  if (!kbps) throw new Error('MP3 sense capçalera de frame reconeixible');
  return Math.round(((data.length - offset) * 8) / kbps);
}

/**
 * Quan acaba cada paraula si només se sap la durada total: es reparteix per
 * lletres, amb una mica més de temps després de comes i punts, on la veu fa pausa.
 */
export function spreadWordEnds(text: string, durationMs: number) {
  const words = text.split(/\s+/);
  const weight = (word: string) =>
    word.length + (/[.?!…]$/.test(word) ? 6 : /[,;:]$/.test(word) ? 3 : 0);
  const total = words.reduce((sum, word) => sum + weight(word), 0);
  // ElevenLabs deixa uns 150 ms de silenci a cada extrem.
  const lead = Math.min(150, durationMs * 0.05);
  const span = durationMs - lead * 2;
  let acc = 0;
  return words.map((word) => Math.round(lead + ((acc += weight(word)) / total) * span));
}

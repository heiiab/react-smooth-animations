const mask = 19;
const base = Object.fromEntries(Array.from({ length: mask }, (_, i) => [i, Math.random() * 0x7FFFFFFF]));
let offset = 0;

function uuid(): string {
  const idx = offset & mask;
  const xor = base[idx] ^ offset;

  offset += 1;
  return (((xor | mask) ^ mask) | idx).toString(36);
}

export default uuid;

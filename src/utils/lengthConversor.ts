export function lengthConversor(valor: number, unidadeOriginal: string, unidadeDestino: string): number {
  const fatoresConversao: { [key: string]: number } = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000,
    in: 25.4,
    ft: 304.8,
    yd: 914.4,
    mi: 1609344,
  };

  if (!fatoresConversao.hasOwnProperty(unidadeOriginal) || !fatoresConversao.hasOwnProperty(unidadeDestino)) {
    throw new Error("Unidades de medida inválidas!");
  }

  const fatorOriginal = fatoresConversao[unidadeOriginal];
  const fatorDestino = fatoresConversao[unidadeDestino];

  const valorConvertido = (valor * fatorOriginal) / fatorDestino;
  return valorConvertido;
}

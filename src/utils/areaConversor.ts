export function areaConversor(valor: number, unidadeAtual: string, unidadeDestino: string): number | undefined {
  const fatoresConversao: { [key: string]: number } = {
    "mm2": 1,
    "cm2": 100,
    "m2": 1000000,
    "km2": 1000000000000,
    "in2": 645.16,


    "ft2": 0.0000107639,
    "yd2": 0.000119599,
    "mi2": 0.000000000386102,
  };

  const fatorConversaoAtual = fatoresConversao[unidadeAtual];
  const fatorConversaoDestino = fatoresConversao[unidadeDestino];

  const valorConvertido = (valor * fatorConversaoAtual) / fatorConversaoDestino;
  return valorConvertido;
}

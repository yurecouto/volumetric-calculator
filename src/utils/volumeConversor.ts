export function volumeConversor(measure: number, originalMeasure: string, finalMeasure: string): number {
  const convertFactor: { [key: string]: number } = {
    "ml": 1,
    "cl": 10,
    "dl": 100,
    "l": 1000,
    "kl": 1000000,
    "in3": 16.387064,
    "mm3": 0.001,
    "cm3": 1,
    "m3": 1000000,
    "gal": 3785.41,
  };

  const originalFactor = convertFactor[originalMeasure];
  const finalFactor = convertFactor[finalMeasure];

  const convertedFactor = (measure * originalFactor) / finalFactor;
  return convertedFactor;
}

export function areaConversor(valor: number, unidadeOriginal: string, unidadeDestino: string): number {
  let valorEmMilimetrosQuadrados: number;

  switch (unidadeOriginal) {
    case "mm2":
      valorEmMilimetrosQuadrados = valor;
      break;
    case "cm2":
      valorEmMilimetrosQuadrados = valor * 100;
      break;
    case "m2":
      valorEmMilimetrosQuadrados = valor * 1000000;
      break;
    case "km2":
      valorEmMilimetrosQuadrados = valor * 1000000000000;
      break;
    case "in2":
      valorEmMilimetrosQuadrados = valor * 645.16;
      break;
    case "ft2":
      valorEmMilimetrosQuadrados = valor * 92903.04;
      break;
    case "yd2":
      valorEmMilimetrosQuadrados = valor * 836127.36;
      break;
    case "mi2":
      valorEmMilimetrosQuadrados = valor * 2589988110336;
      break;
    default:
      throw new Error("Unidade de medida original inválida.");
  }

  let valorConvertido: number;

  switch (unidadeDestino) {
    case "mm2":
      valorConvertido = valorEmMilimetrosQuadrados;
      break;
    case "cm2":
      valorConvertido = valorEmMilimetrosQuadrados / 100;
      break;
    case "m2":
      valorConvertido = valorEmMilimetrosQuadrados / 1000000;
      break;
    case "km2":
      valorConvertido = valorEmMilimetrosQuadrados / 1000000000000;
      break;
    case "in2":
      valorConvertido = valorEmMilimetrosQuadrados / 645.16;
      break;
    case "ft2":
      valorConvertido = valorEmMilimetrosQuadrados / 92903.04;
      break;
    case "yd2":
      valorConvertido = valorEmMilimetrosQuadrados / 836127.36;
      break;
    case "mi2":
      valorConvertido = valorEmMilimetrosQuadrados / 2589988110336;
      break;
    default:
      throw new Error("Unidade de medida de destino inválida.");
  }

  return valorConvertido;
}

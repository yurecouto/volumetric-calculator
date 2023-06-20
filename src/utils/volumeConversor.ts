export function volumeConversor(valor: number, unidadeOriginal: string, unidadeDestino: string): number {
  let valueL: number;

  switch (unidadeOriginal) {
    case "ml":
      valueL = valor / 1000;
      break;
    case "cl":
      valueL = valor / 100;
      break;
    case "dl":
      valueL = valor / 10;
      break;
    case "l":
      valueL = valor;
      break;
    case "kl":
      valueL = valor * 1000;
      break;
    case "in3":
      valueL = valor * 0.0163871;
      break;
    case "mm3":
      valueL = valor / 1000000;
      break;
    case "cm3":
      valueL = valor / 1000;
      break;
    case "m3":
      valueL = valor * 1000;
      break;
    case "gal":
      valueL = valor * 3.78541;
      break;
    default:
      throw new Error("Unidade de medida original inválida.");
  }

  let valorConvertido: number;

  switch (unidadeDestino) {
    case "ml":
      valorConvertido = valueL * 1000;
      break;
    case "cl":
      valorConvertido = valueL * 100;
      break;
    case "dl":
      valorConvertido = valueL * 10;
      break;
    case "l":
      valorConvertido = valueL;
      break;
    case "kl":
      valorConvertido = valueL / 1000;
      break;
    case "in3":
      valorConvertido = valueL / 0.0163871;
      break;
    case "mm3":
      valorConvertido = valueL * 1000000;
      break;
    case "cm3":
      valorConvertido = valueL * 1000;
      break;
    case "m3":
      valorConvertido = valueL / 1000;
      break;
    case "gal":
      valorConvertido = valueL / 3.78541;
      break;
    default:
      throw new Error("Unidade de medida de destino inválida.");
  }

  return valorConvertido;
}

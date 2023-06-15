export function lengthConversor(valor: number, unidadeOriginal: string, unidadeDestino: string): number {
  // Converter para milímetros
  let valorEmMilimetros: number;

  switch (unidadeOriginal) {
    case 'mm':
      valorEmMilimetros = valor;
      break;
    case 'cm':
      valorEmMilimetros = valor * 10;
      break;
    case 'm':
      valorEmMilimetros = valor * 1000;
      break;
    case 'km':
      valorEmMilimetros = valor * 1000000;
      break;
    case 'in':
      valorEmMilimetros = valor * 25.4;
      break;
    case 'ft':
      valorEmMilimetros = valor * 304.8;
      break;
    case 'yd':
      valorEmMilimetros = valor * 914.4;
      break;
    case 'mi':
      valorEmMilimetros = valor * 1609344;
      break;
    default:
      throw new Error('Unidade de medida original inválida.');
  }

  // Converter para a unidade de destino
  let valorConvertido: number;

  switch (unidadeDestino) {
    case 'mm':
      valorConvertido = valorEmMilimetros;
      break;
    case 'cm':
      valorConvertido = valorEmMilimetros / 10;
      break;
    case 'm':
      valorConvertido = valorEmMilimetros / 1000;
      break;
    case 'km':
      valorConvertido = valorEmMilimetros / 1000000;
      break;
    case 'in':
      valorConvertido = valorEmMilimetros / 25.4;
      break;
    case 'ft':
      valorConvertido = valorEmMilimetros / 304.8;
      break;
    case 'yd':
      valorConvertido = valorEmMilimetros / 914.4;
      break;
    case 'mi':
      valorConvertido = valorEmMilimetros / 1609344;
      break;
    default:
      throw new Error('Unidade de medida de destino inválida.');
  }

  return valorConvertido;
}

export function WeightConverter(
  weight: any,
  convertFrom: string,
  convertTo: string
) {
  if (convertFrom === "KG") {
    if (convertTo === "LB") {
      return weight * 10;
    }
  } else {
    return weight;
  }
}

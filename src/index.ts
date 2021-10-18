export enum WEIGHT_UNIT {
  LB,
  KG,
  G,
  OZ,
  POUND,
  TON,
}
export function weightUnitConverter(
  weight: any,
  unitFrom: WEIGHT_UNIT,
  unitTo: WEIGHT_UNIT
) {
  switch (unitFrom) {
    case WEIGHT_UNIT.KG:
      if (unitTo === WEIGHT_UNIT.G) {
        return weight / 1000;
      }
      if (unitTo === WEIGHT_UNIT.LB) {
        return weight * 2.20462;
      } else if (unitTo === WEIGHT_UNIT.OZ) {
        return weight * 2.20462;
      }
      if (unitTo === WEIGHT_UNIT.POUND) {
        return weight * 2.20462;
      }
      if (unitTo === WEIGHT_UNIT.TON) {
        return weight * 1000;
      }
      break;
    case WEIGHT_UNIT.G:
      weight = weight * 1000;
      if (unitTo === WEIGHT_UNIT.KG) {
        return weight;
      }
      if (unitTo === WEIGHT_UNIT.LB) {
        return weight * 2.20462;
      } else if (unitTo === WEIGHT_UNIT.OZ) {
        return weight * 2.20462;
      }
      if (unitTo === WEIGHT_UNIT.POUND) {
        return weight * 2.20462;
      }
      if (unitTo === WEIGHT_UNIT.TON) {
        return weight * 1000;
      }
      break;

    default:
      return weight;
  }
}

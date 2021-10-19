export enum LENGTH_UNIT {
  MM,
  CM,
  M,
  KM,
  INCH,
  FEET

}
export function legnthUnitConverter(
  length: any,
  unitFrom: LENGTH_UNIT,
  unitTo: LENGTH_UNIT
) {
  switch (unitFrom) {
    case LENGTH_UNIT.MM:
      if (unitTo === LENGTH_UNIT.CM) {
        return length * 0.1;
      }
      if (unitTo === LENGTH_UNIT.M) {
        return length * 0.001;
      } else if (unitTo === LENGTH_UNIT.KM) {
        return length * 0.000001;
      }
      if (unitTo === LENGTH_UNIT.INCH) {
        return length * 0.0393701;
      }
      if (unitTo === LENGTH_UNIT.FEET) {
        return length * 0.00328084;
      }
      break;
    case LENGTH_UNIT.CM:
      //length = length * 1000;
      if (unitTo === LENGTH_UNIT.MM) {
        return length * 10;
      }
      if (unitTo === LENGTH_UNIT.M) {
        return length * 0.01;
      } else if (unitTo === LENGTH_UNIT.KM) {
        return length * 0.00001;
      }
      if (unitTo === LENGTH_UNIT.INCH) {
        return length * 0.393701;
      }
      if (unitTo === LENGTH_UNIT.FEET) {
        return length * 0.0328084;
      }
      break;
 
    case LENGTH_UNIT.M:
      if (unitTo === LENGTH_UNIT.MM) {
        return length * 1000;
      }
      if (unitTo === LENGTH_UNIT.CM) {
        return (length * 100);
      } else if (unitTo === LENGTH_UNIT.KM) {
        return length * 0.001;
      }
      if (unitTo === LENGTH_UNIT.INCH) {
        return length * 39.3701;
      }
      if (unitTo === LENGTH_UNIT.FEET) {
        return length * 3.28084;
      }
      break;
    case LENGTH_UNIT.KM:
      if (unitTo === LENGTH_UNIT.MM) {
        return length * 1000000;
      }
      if (unitTo === LENGTH_UNIT.CM) {
        return length * 100000;
      } else if (unitTo === LENGTH_UNIT.M) {
        return length * 1000;
      }
      if (unitTo === LENGTH_UNIT.INCH) {
        return length * 39370.1;
      }
      if (unitTo === LENGTH_UNIT.FEET) {
        return length * 3280.84;
      }
      break;
    case LENGTH_UNIT.INCH:
      if (unitTo === LENGTH_UNIT.MM) {
        return length * 25.4;
      }
      if (unitTo === LENGTH_UNIT.CM) {
        return length * 2.54;
      } else if (unitTo === LENGTH_UNIT.M) {
        return length * 0.0254;
      }
      if (unitTo === LENGTH_UNIT.KM) {
        return length * 0.0000254;
      }
      if (unitTo === LENGTH_UNIT.FEET) {
        return length * 0.0833333;
      }
      break;

    case LENGTH_UNIT.FEET:
      if (unitTo === LENGTH_UNIT.MM) {
        return length * 304.8;
      }
      if (unitTo === LENGTH_UNIT.CM) {
        return length * 30.48;
      } else if (unitTo === LENGTH_UNIT.M) {
        return length * 0.3048;
      }
      if (unitTo === LENGTH_UNIT.KM) {
        return length * 0.0003048;
      }
      if (unitTo === LENGTH_UNIT.INCH) {
        return length * 12;
      }
      break;
 

    default:
      return length;
  }
}

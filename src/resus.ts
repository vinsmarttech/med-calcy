

import { LENGTH_UNIT } from "./lengthUnitConverter";
import { VOLUME_UNIT, WEIGHT_UNIT } from "./weightUnitConverter";

export interface ResusInputType {
  weight: number;
  unit?: WEIGHT_UNIT;
}
//#region  input weight in kgs only and return value in 'MM'

export class Resus {
  weight: number;

  constructor({ weight, unit }: ResusInputType) {
    this.weight = weight ? weight : 0;
  }
  endoCatheralTube() {
    if (this.weight <= 1) {
      return 2.5;
    } else if (this.weight > 1 && this.weight <= 3) {
      return { data: 3.0, unit: LENGTH_UNIT.CM };
    } else if (this.weight > 3 && this.weight <= 5) {
      return { data: 3.5, unit: LENGTH_UNIT.CM };
    } else if (this.weight > 5) {

      return { data: 4.0, unit: LENGTH_UNIT.CM };

    }
  }
  umbricalArterialCatheer() {
    return { data: this.weight * 3 + 9, unit: LENGTH_UNIT.CM };
  }
  //> UVC


  drugAdrenaline() {
    return { data: this.weight * 0.1, unit: VOLUME_UNIT.ML };
  }

  //#endregion
}

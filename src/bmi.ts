import { VOLUME_UNIT, WEIGHT_UNIT } from "./weightUnitConverter";

export interface ResusInputType {
  weight: number;
  unit?: WEIGHT_UNIT;
  height: number;
}
//#region  input weight in kgs only and return value in 'MM'

export class BMIBSA {
  weight: number;
  height: number;
  constructor({ weight, unit, height }: ResusInputType) {
    this.weight = weight ? weight : 0;
    this.height = height ? height : 0;
  }
  bmi() {
    ///Calculation for BMI 
    var bmiData = this.weight / (this.height * this.height);



    ///  returnResult={data:bmiData,unit:"KG /m2",result:"UNDERWEIGHT}
    return { data: bmiData, unit: "KG/ M 2", result: "" };
  }
  bsa() {
    ///Calculation for BMI 
    var bsaData = (0.007184) * Math.pow(this.weight, 0.425) * Math.pow(this.height, 0.725);


    return bsaData
  }
    //#endregion
  }

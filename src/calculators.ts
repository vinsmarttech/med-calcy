import { WEIGHT_UNIT } from "./weightUnitConverter";
interface BMIInputTypes {
  weight: number;
  unit?: WEIGHT_UNIT;
  height: number;
}

interface BSAInputTypes {
  weight: number;
  unit?: WEIGHT_UNIT;
  height: number;
}
//#region  input weight in kgs only and return value in 'MM'

export function  bodyMassIndex({ weight, height }: BMIInputTypes) {
  ///Calculation for BMI

  var bmiData = weight / Math.pow(height, 2);
  if (bmiData < 18.5) {
    return {
      data: bmiData,
      unit: "KG/m2",
      remark: "Under Weight",
    };
  } else if (bmiData < 24.99) {
    return {
      data: bmiData,
      unit: "KG/m2",
      remark: "Normal",
    };
  } else if (bmiData < 29.99) {
    return {
      data: bmiData,
      unit: "KG/m2",
      remark: "Over Weight",
    };
  } else
    return {
      data: bmiData,
      unit: "KG/m2",
      remark: "Obessed",
    };
};

export function bodySurfaceArea({ weight, height }: BMIInputTypes) {
  var bsaData = 0.007184 * (Math.pow(weight, 0.425) * Math.pow(height, 0.725));
  return {
    data: bsaData,
    unit: "KG/m2",
    remark: "",
  };
}

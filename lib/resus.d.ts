import { WEIGHT_UNIT } from "./weightUnitConverter";
export interface ResusInputType {
    weight: number;
    unit?: WEIGHT_UNIT;
}
export declare class Resus {
    weight: number;
    constructor({ weight, unit }: ResusInputType);
    endoCatheralTube(): 2.5 | 3 | 3.5 | 4 | undefined;
    umbricalArterialCatheer(): number;
}
//# sourceMappingURL=resus.d.ts.map
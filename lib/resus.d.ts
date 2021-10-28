import { LENGTH_UNIT } from "./lengthUnitConverter";
import { VOLUME_UNIT, WEIGHT_UNIT } from "./weightUnitConverter";
export interface ResusInputType {
    weight: number;
    unit?: WEIGHT_UNIT;
}
export declare class Resus {
    weight: number;
    constructor({ weight, unit }: ResusInputType);
    endoCatheralTube(): 2.5 | {
        data: number;
        unit: LENGTH_UNIT;
    } | undefined;
    umbricalArterialCatheer(): {
        data: number;
        unit: LENGTH_UNIT;
    };
    drugAdrenaline(): {
        data: number;
        unit: VOLUME_UNIT;
    };
}
//# sourceMappingURL=resus.d.ts.map
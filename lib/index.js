"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightUnitConverter = exports.WEIGHT_UNIT = void 0;
var WEIGHT_UNIT;
(function (WEIGHT_UNIT) {
    WEIGHT_UNIT[WEIGHT_UNIT["LB"] = 0] = "LB";
    WEIGHT_UNIT[WEIGHT_UNIT["KG"] = 1] = "KG";
    WEIGHT_UNIT[WEIGHT_UNIT["G"] = 2] = "G";
    WEIGHT_UNIT[WEIGHT_UNIT["OZ"] = 3] = "OZ";
    WEIGHT_UNIT[WEIGHT_UNIT["POUND"] = 4] = "POUND";
    WEIGHT_UNIT[WEIGHT_UNIT["TON"] = 5] = "TON";
})(WEIGHT_UNIT = exports.WEIGHT_UNIT || (exports.WEIGHT_UNIT = {}));
function weightUnitConverter(weight, unitFrom, unitTo) {
    switch (unitFrom) {
        case WEIGHT_UNIT.KG:
            if (unitTo === WEIGHT_UNIT.G) {
                return weight / 1000;
            }
            if (unitTo === WEIGHT_UNIT.LB) {
                return weight * 2.20462;
            }
            else if (unitTo === WEIGHT_UNIT.OZ) {
                return weight * 2.20462;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight * 2.20462;
            }
            if (unitTo === WEIGHT_UNIT.TON) {
                return weight * 0.001;
            }
            break;
        case WEIGHT_UNIT.G:
            if (unitTo === WEIGHT_UNIT.KG) {
                return weight * 1000;
            }
            if (unitTo === WEIGHT_UNIT.LB) {
                return weight * 2.20462 * 1000;
            }
            else if (unitTo === WEIGHT_UNIT.OZ) {
                return weight * 2.20462 * 1000;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight * 2.20462 * 1000;
            }
            if (unitTo === WEIGHT_UNIT.TON) {
                return weight * 0.001 * 1000;
            }
            break;
        default:
            return weight;
    }
}
exports.weightUnitConverter = weightUnitConverter;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthUnitConverter = exports.WEIGHT_UNIT = void 0;
var WEIGHT_UNIT;
(function (WEIGHT_UNIT) {
    WEIGHT_UNIT[WEIGHT_UNIT["LB"] = 0] = "LB";
    WEIGHT_UNIT[WEIGHT_UNIT["KG"] = 1] = "KG";
    WEIGHT_UNIT[WEIGHT_UNIT["G"] = 2] = "G";
    WEIGHT_UNIT[WEIGHT_UNIT["OZ"] = 3] = "OZ";
    WEIGHT_UNIT[WEIGHT_UNIT["POUND"] = 4] = "POUND";
    WEIGHT_UNIT[WEIGHT_UNIT["TON"] = 5] = "TON";
})(WEIGHT_UNIT = exports.WEIGHT_UNIT || (exports.WEIGHT_UNIT = {}));
function lengthUnitConverter(weight, unitFrom, unitTo) {
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
            }
            else if (unitTo === WEIGHT_UNIT.OZ) {
                return weight * 2.20462;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight * 2.20462;
            }
            if (unitTo === WEIGHT_UNIT.TON) {
                return weight * 1000;
            }
            break;
        case WEIGHT_UNIT.LB:
            if (unitTo === WEIGHT_UNIT.KG) {
                return weight / 2.20462;
            }
            if (unitTo === WEIGHT_UNIT.G) {
                return (weight / 2.20462) * 0.001;
            }
            else if (unitTo === WEIGHT_UNIT.OZ) {
                return weight * 16;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight;
            }
            if (unitTo === WEIGHT_UNIT.TON) {
                return weight * 0.000453592;
            }
            break;
        case WEIGHT_UNIT.OZ:
            if (unitTo === WEIGHT_UNIT.KG) {
                return weight * 0.0283495;
            }
            if (unitTo === WEIGHT_UNIT.G) {
                return weight * 28.3495;
            }
            else if (unitTo === WEIGHT_UNIT.LB) {
                return weight * 0.0625;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight * 0.0625;
            }
            if (unitTo === WEIGHT_UNIT.TON) {
                return weight * 0.00002835;
            }
            break;
        case WEIGHT_UNIT.TON:
            if (unitTo === WEIGHT_UNIT.KG) {
                return weight * 1000;
            }
            if (unitTo === WEIGHT_UNIT.G) {
                return weight * 1000 * 0.001;
            }
            else if (unitTo === WEIGHT_UNIT.LB) {
                return weight * 2204.62;
            }
            if (unitTo === WEIGHT_UNIT.POUND) {
                return weight * 2204.62;
            }
            if (unitTo === WEIGHT_UNIT.OZ) {
                return weight * 35274;
            }
            break;
        default:
            return weight;
    }
}
exports.lengthUnitConverter = lengthUnitConverter;
//# sourceMappingURL=weightUnitConverter%20copy.js.map
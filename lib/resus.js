"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resus = void 0;
var lengthUnitConverter_1 = require("./lengthUnitConverter");
var weightUnitConverter_1 = require("./weightUnitConverter");
//#region  input weight in kgs only and return value in 'MM'
var Resus = /** @class */ (function () {
    function Resus(_a) {
        var weight = _a.weight, unit = _a.unit;
        this.weight = weight ? weight : 0;
    }
    Resus.prototype.endoCatheralTube = function () {
        if (this.weight <= 1) {
            return 2.5;
        }
        else if (this.weight > 1 && this.weight <= 3) {
            return { data: 3.0, unit: lengthUnitConverter_1.LENGTH_UNIT.CM };
        }
        else if (this.weight > 3 && this.weight <= 5) {
            return { data: 3.5, unit: lengthUnitConverter_1.LENGTH_UNIT.CM };
        }
        else if (this.weight > 5) {
            return { data: 4.0, unit: lengthUnitConverter_1.LENGTH_UNIT.CM };
        }
    };
    Resus.prototype.umbricalArterialCatheer = function () {
        return { data: this.weight * 3 + 9, unit: lengthUnitConverter_1.LENGTH_UNIT.CM };
    };
    //> UVC
    Resus.prototype.drugAdrenaline = function () {
        return { data: this.weight * 0.1, unit: weightUnitConverter_1.VOLUME_UNIT.ML };
    };
    return Resus;
}());
exports.Resus = Resus;
//# sourceMappingURL=resus.js.map
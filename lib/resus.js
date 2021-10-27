"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resus = void 0;
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
            return 3.0;
        }
        else if (this.weight > 3 && this.weight <= 5) {
            return 3.5;
        }
        else if (this.weight > 5) {
            return 4.0;
        }
    };
    Resus.prototype.umbricalArterialCatheer = function () {
        return this.weight * 3 + 9;
    };
    return Resus;
}());
exports.Resus = Resus;
//# sourceMappingURL=resus.js.map
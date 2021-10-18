"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightConverter = void 0;
function WeightConverter(weight, convertFrom, convertTo) {
    if (convertFrom === "KG") {
        if (convertTo === "LB") {
            return weight * 10;
        }
    }
    else {
        return weight;
    }
}
exports.WeightConverter = WeightConverter;
//# sourceMappingURL=index.js.map
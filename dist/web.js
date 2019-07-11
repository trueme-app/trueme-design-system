"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var system_1 = __importStar(require("./system"));
exports.DesignSystemThemeProvider = system_1.DesignSystemThemeProvider;
var setUnits = system_1.default.setUnits, setTypeUnits = system_1.default.setTypeUnits;
setUnits('px');
setTypeUnits('rem');
exports.default = system_1.default;

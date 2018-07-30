"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convert;
function convert(weight, conversion) {
  if (conversion == "kg->lb") {
    var lb = weight * 2.20462;
    return lb + " Pounds";
  } else if (conversion == "lb->kg") {
    var kg = weight * 0.453592;
    return kg + " kilograms";
  } else return "Invalid conversion";
}
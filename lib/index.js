"use strict";

module.exports = function () {
  return function (ReactClass) {
    var ModifiedReactClass = ReactClass;
    ModifiedReactClass.__react_transform_noop = true;
    return ModifiedReactClass;
  };
};
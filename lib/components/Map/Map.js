"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _MapComponent = _interopRequireDefault(require("./components/MapComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Map = function Map(props) {
  return React.createElement(_List.default, {
    data: props.data.items
  }, function (_a) {
    var data = _a.data;
    return React.createElement(_MapComponent.default, {
      title: props.data.title,
      items: data
    });
  });
};

var _default = Map;
exports.default = _default;
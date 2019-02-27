"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _InfoElement = _interopRequireDefault(require("./components/InfoElement"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CustomInfoBoxes = function CustomInfoBoxes(props) {
  var _a = props.data,
      title = _a.title,
      boxes = _a.boxes;
  return React.createElement(_List.default, {
    data: boxes
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: 'custom-info-boxes'
    }, title && title.length > 1 && React.createElement("h3", null, title), React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'custom-info-boxes__list grid'
    }, data && data.map(function (box, i) {
      return React.createElement(_InfoElement.default, {
        link: box.link,
        gradientColor: box.gradientColor,
        title: box.title,
        image: box.image,
        button: box.button,
        titleColor: box.titleColor,
        key: i
      });
    }))));
  });
};

var _default = CustomInfoBoxes;
exports.default = _default;
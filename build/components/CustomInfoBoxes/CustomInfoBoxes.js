import * as React from 'react';
import InfoElement from './components/InfoElement';
import List from '../List';
var CustomInfoBoxes = function (props) {
    var _a = props.data, title = _a.title, boxes = _a.boxes;
    return (React.createElement(List, { data: boxes }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'custom-info-boxes' },
            title && title.length > 1 && React.createElement("h3", null, title),
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'custom-info-boxes__list grid' }, data && data.map(function (box, i) { return (React.createElement(InfoElement, { link: box.link, gradientColor: box.gradientColor, title: box.title, image: box.image, button: box.button, titleColor: box.titleColor, key: i })); })))));
    }));
};
export default CustomInfoBoxes;
//# sourceMappingURL=CustomInfoBoxes.js.map
import * as React from 'react';
import InfoElement from './components/InfoElement';
import List from '../List';
var InfoBoxes = function (props) {
    var _a = props.data, title = _a.title, dividerOnTop = _a.dividerOnTop, indentAtBottom = _a.indentAtBottom, boxes = _a.boxes;
    return (React.createElement(List, { data: boxes }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'info-boxes', style: indentAtBottom ? { paddingBottom: 55 } : {} },
            React.createElement("div", { className: 'container' },
                dividerOnTop ? React.createElement("div", { className: 'info-boxes__divider' }) : '',
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'grid info-boxes__list' }, data && data.map(function (box, i) { return (React.createElement(InfoElement, { title: box.title, image: box.image, url: box.url, key: i })); })))));
    }));
};
export default InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map
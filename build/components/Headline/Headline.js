import * as React from 'react';
var Headline = function (props) {
    var _a = props.data, title = _a.title, displayOnTop = _a.displayOnTop;
    return (React.createElement("div", { className: 'headline', style: displayOnTop ? { paddingTop: 170 } : {} }, title && React.createElement("h3", null, title)));
};
export default Headline;
//# sourceMappingURL=Headline.js.map
import React from 'react';
import List from '../List';
import FaqItem from './components/FaqItem';
var Faq = function (props) {
    var _a = props.data, paddingTop = _a.paddingTop, title = _a.title, text = _a.text, questions = _a.questions;
    return (React.createElement(List, { data: questions }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'faq' },
            React.createElement("div", { className: "container" },
                text && React.createElement("h4", { style: paddingTop ? { paddingTop: 0 } : {}, className: 'faq__text' }, text),
                React.createElement("div", { className: "row faq__list" },
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("h3", null, title)),
                    React.createElement("div", { className: "col-12 col-md-9" }, data && data.map(function (item, i) { return (React.createElement(FaqItem, { key: i, title: item.title, text: item.text })); }))))));
    }));
};
export default Faq;
//# sourceMappingURL=Faq.js.map
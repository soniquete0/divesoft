"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var ContactColumns = function (props) {
    var _a = props.data, firstTitle = _a.firstTitle, firstAddress = _a.firstAddress, firstEmail = _a.firstEmail, firstAccounts = _a.firstAccounts, secondTitle = _a.secondTitle, secondAddress = _a.secondAddress, secondEmail = _a.secondEmail, secondAccounts = _a.secondAccounts, bottomInfo = _a.bottomInfo;
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'contactColumns' },
            React.createElement("div", { className: 'contactColumns__list d-flex justify-content-between' },
                React.createElement("div", { className: 'contactColumns__col' },
                    firstTitle && React.createElement("h3", null, firstTitle),
                    firstAddress && React.createElement("h4", { className: 'contactColumns__col__address' }, firstAddress),
                    firstEmail &&
                        React.createElement("h5", null,
                            "E-mail: ",
                            React.createElement("a", { style: { color: '#e50000' }, href: "mailto:" + firstEmail }, firstEmail)),
                    firstAccounts && React.createElement(ReactMarkdown, { source: firstAccounts })),
                React.createElement("div", { className: 'contactColumns__col' },
                    secondTitle && React.createElement("h3", null, secondTitle),
                    secondAddress && React.createElement("h4", { className: 'contactColumns__col__address' }, secondAddress),
                    secondEmail &&
                        React.createElement("h5", null,
                            "E-mail: ",
                            React.createElement("a", { style: { color: '#e50000' }, href: "mailto:" + secondEmail }, secondEmail)),
                    secondAccounts && React.createElement(ReactMarkdown, { source: secondAccounts }))),
            bottomInfo && React.createElement("p", { className: 'contactColumns__bottomInfo' }, bottomInfo),
            React.createElement("div", { className: 'contactColumns__divider' }))));
};
exports.default = ContactColumns;
//# sourceMappingURL=ContactColumns.js.map
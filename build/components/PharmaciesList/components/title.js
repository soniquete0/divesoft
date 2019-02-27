import * as React from 'react';
var Title = function (props) {
    return (React.createElement("div", { className: 'pcTitle' },
        React.createElement("img", { src: "/assets/divesoft/images/logo.svg", alt: "Medicon Logo" }),
        React.createElement("div", { className: 'pcTitle__title' },
            React.createElement("h3", null, "Pharmacentrum"),
            React.createElement("div", { className: 'pcTitle__title__subtitle' },
                React.createElement("span", null, props.name),
                React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null))))));
};
export default Title;
//# sourceMappingURL=title.js.map
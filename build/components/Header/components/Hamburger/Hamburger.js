import * as React from 'react';
var Hamburger = function (props) {
    return (React.createElement("div", { className: "hamburgerHolder " + (props.active ? 'active' : ''), onClick: function () { return props.onClick(); } },
        React.createElement("div", { className: "hamburger" },
            React.createElement("div", null)),
        React.createElement("div", { className: "hamburgerActive" },
            React.createElement("div", null)),
        React.createElement("p", { style: { margin: '0', padding: '0 10px' } }, "Menu")));
};
export default Hamburger;
//# sourceMappingURL=Hamburger.js.map
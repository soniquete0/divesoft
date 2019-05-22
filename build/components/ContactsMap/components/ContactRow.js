"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../../List");
var Link_1 = require("../../../partials/Link");
var ContactRow = /** @class */ (function (_super) {
    __extends(ContactRow, _super);
    function ContactRow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1
        };
        return _this;
    }
    ContactRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, rows = _a.rows;
        return (React.createElement(List_1.default, { data: rows }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 3), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'contactRow' },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: "row contactRow__divider" },
                        React.createElement("div", { className: "col-12 col-md-3" },
                            React.createElement("h3", null, title),
                            _this.state.numberOfPage < lastPage &&
                                React.createElement("button", { className: 'contactRow__showMore', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "Show more")),
                        React.createElement("div", { className: "col-12 col-md-9" },
                            React.createElement("div", { className: 'row' }, items && items.map(function (item, i) { return (React.createElement("div", { key: i, className: 'contactRow__item col-12 col-md-4' },
                                React.createElement("h5", null, item.name),
                                React.createElement("span", null, item.position),
                                React.createElement("p", null,
                                    "W: ",
                                    React.createElement(Link_1.default, __assign({}, item.url), item.urlTitle)),
                                React.createElement("p", null,
                                    "M: ",
                                    React.createElement("a", { href: "mailto:" + item.email }, item.email)),
                                React.createElement("p", null,
                                    "P: ",
                                    React.createElement("a", { href: "tel:" + item.phone }, item.phone)))); })))))));
        }));
    };
    return ContactRow;
}(React.Component));
exports.default = ContactRow;
//# sourceMappingURL=ContactRow.js.map
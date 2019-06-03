"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../../../List");
var MapRow_1 = require("./components/MapRow");
var MapRows = function (props) {
    var title = props.title, items = props.items;
    return (React.createElement(List_1.default, { data: items }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'mapRow' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mapRow__list" },
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("h3", { className: 'mapRow__list__title' }, title)),
                    React.createElement("div", { className: "col-12 col-md-9" }, data && data.map(function (item, i) { return (React.createElement(MapRow_1.default, { key: i, web: item.web, text: item.text, title: item.title, phone: item.phone, email: item.email, address: item.address, storeChief: item.storeChief })); }))))));
    }));
};
exports.default = MapRows;
//# sourceMappingURL=MapRows.js.map
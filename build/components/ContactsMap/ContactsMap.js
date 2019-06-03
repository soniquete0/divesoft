"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Map_1 = require("../Map");
var List_1 = require("../List");
function ContactsMap(props) {
    var _a = props.data, title = _a.title, mapItems = _a.mapItems;
    return (React.createElement(List_1.default, { data: mapItems }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'contactsMapWrapper' },
            title ? React.createElement("h2", { style: { paddingBottom: '30px', textAlign: 'center' } }, title) : '',
            React.createElement(Map_1.default, { mapItems: data, type: 'contacts' })));
    }));
}
exports.default = ContactsMap;
//# sourceMappingURL=ContactsMap.js.map
import React from 'react';
import List from '../../../List';
import ServiceRowItem from './components/ServiceRowItem';
var ServiceRow = function (props) {
    var title = props.title, items = props.items;
    return (React.createElement(List, { data: items }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'serviceRow' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row serviceRow__list" },
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("h3", { className: 'serviceRow__list__title' }, title)),
                    React.createElement("div", { className: "col-12 col-md-9" }, data && data.map(function (item, i) { return (React.createElement(ServiceRowItem, { key: i, web: item.web, text: item.text, title: item.title, phone: item.phone, email: item.email, address: item.address, storeChief: item.storeChief })); }))))));
    }));
};
export default ServiceRow;
//# sourceMappingURL=ServiceRow.js.map
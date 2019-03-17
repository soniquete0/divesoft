import React from 'react';
var Controls = function (props) {
    var cities = [];
    var countries = [];
    var associations = [];
    var propsToArray = function () {
        for (var i = 0; i < props.items.length; i++) {
            countries.push(props.items[i].country);
        }
        for (var i = 0; i < props.items.length; i++) {
            cities.push(props.items[i].city);
        }
        for (var i = 0; i < props.items.length; i++) {
            associations.push(props.items[i].association);
        }
    };
    var uniqueArray = function (arr) { return Array.from(new Set(arr)); };
    propsToArray();
    cities = uniqueArray(cities);
    countries = uniqueArray(countries);
    associations = uniqueArray(associations);
    return (React.createElement("div", { className: 'map__controls' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-md-4" },
                    React.createElement("div", { className: 'select' },
                        React.createElement("select", null, countries && countries.map(function (item, i) { return (React.createElement("option", { key: i, value: i }, item)); })))),
                React.createElement("div", { className: "col-12 col-md-4" },
                    React.createElement("div", { className: 'select' },
                        React.createElement("select", null, cities && cities.map(function (item, i) { return (React.createElement("option", { key: i, value: i }, item)); })))),
                React.createElement("div", { className: "col-12 col-md-4" },
                    React.createElement("div", { className: 'select' },
                        React.createElement("select", null, associations && associations.map(function (item, i) { return (React.createElement("option", { key: i, value: i }, item)); }))))))));
};
export default Controls;
//# sourceMappingURL=Controls.js.map
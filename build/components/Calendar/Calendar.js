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
import React from 'react';
import dateFns from 'date-fns';
import Responsive from 'react-responsive';
import List from '../List';
import Button from '@source/partials/Button';
import MapComponent from './Map/components/MapComponent';
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () { return _this.getUniqControlProps(); };
        _this.search = function (data) {
            var _a = _this.state, countrySelectedValue = _a.countrySelectedValue, keywordSelectedValue = _a.keywordSelectedValue;
            data.map(function (item, i) {
                if (item.country === countrySelectedValue && countrySelectedValue !== 'all' ||
                    item.keyword === keywordSelectedValue && keywordSelectedValue !== 'all') {
                    return _this.setState({
                        mapCenter: {
                            lat: parseFloat(item.lat),
                            lng: parseFloat(item.lng)
                        },
                        switch: false
                    });
                }
            });
        };
        _this.onDateClick = function (day) {
            _this.setState({
                selectedDate: day
            });
        };
        _this.nextMonth = function () {
            _this.setState({
                currentMonth: dateFns.addMonths(_this.state.currentMonth, 1)
            });
        };
        _this.prevMonth = function () {
            _this.setState({
                currentMonth: dateFns.subMonths(_this.state.currentMonth, 1)
            });
        };
        _this.state = {
            switch: true,
            currentMonth: new Date(),
            selectedDate: new Date(),
            mapCenter: {
                lat: 50,
                lng: 14
            },
            countrySelectedValue: 'all',
            keywordSelectedValue: 'all',
            keywords: [],
            countries: [],
            currentDate: 'all'
        };
        return _this;
    }
    Calendar.prototype.getUniqControlProps = function () {
        var dates = this.props.data.dates;
        var uniqKeywords = [];
        var uniqCountries = [];
        var propsToArray = function () {
            for (var i = 0; i < dates.length; i++) {
                uniqCountries.push(dates[i].country);
            }
            for (var i = 0; i < dates.length; i++) {
                uniqKeywords.push(dates[i].keyword);
            }
        };
        var uniqueArray = function (arr) { return Array.from(new Set(arr)); };
        propsToArray();
        uniqKeywords = uniqueArray(uniqKeywords);
        uniqCountries = uniqueArray(uniqCountries);
        return this.setState({
            keywords: uniqKeywords,
            countries: uniqCountries
        });
    };
    Calendar.prototype.defineLocation = function (loc, type) {
        var dates = this.props.data.dates;
        for (var i = 0; i < dates.length; i++) {
            if (dates[i][type] === loc) {
                switch (type) {
                    case 'country':
                        this.setState({
                            keywordSelectedValue: dates[i].keyword,
                            currentDate: dates[i].date
                        });
                        break;
                    case 'keyword':
                        this.setState({
                            countrySelectedValue: dates[i].country,
                            currentDate: dates[i].date
                        });
                        break;
                    case 'filterDate':
                        this.setState({
                            countrySelectedValue: dates[i].country,
                            keywordSelectedValue: dates[i].keyword,
                            currentDate: dates[i].date
                        });
                        break;
                    default: break;
                }
                return {
                    lat: parseFloat(dates[i].lat),
                    lng: parseFloat(dates[i].lng)
                };
            }
        }
    };
    /* SELECT MOUNTH */
    Calendar.prototype.renderHeader = function () {
        var dateFormat = 'MMMM YYYY';
        return (React.createElement("div", { className: "calendar__header row flex-middle" },
            React.createElement("div", { className: "col col-start", onClick: this.prevMonth },
                React.createElement("div", { className: "icon icon--left" })),
            React.createElement("div", { className: "col col-center" },
                React.createElement("h3", null, dateFns.format(this.state.currentMonth, dateFormat))),
            React.createElement("div", { className: "col col-end", onClick: this.nextMonth },
                React.createElement("div", { className: "icon icon--right" }))));
    };
    /* DAYS OF THE WEEK */
    Calendar.prototype.renderDays = function () {
        var dateFormat = 'dddd';
        var days = [];
        var startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (var i = 0; i < 7; i++) {
            days.push(React.createElement("div", { className: "col col-center", key: i }, dateFns.format(dateFns.addDays(startDate, i), dateFormat)));
        }
        return (React.createElement("div", { className: "calendar__days" },
            React.createElement("div", { className: "row" }, days)));
    };
    /* DESKTOP CELLS */
    Calendar.prototype.renderCells = function (data) {
        var _this = this;
        var _a = this.state, currentMonth = _a.currentMonth, selectedDate = _a.selectedDate;
        var monthStart = dateFns.startOfMonth(currentMonth);
        var monthEnd = dateFns.endOfMonth(monthStart);
        var startDate = dateFns.startOfWeek(monthStart);
        var endDate = dateFns.endOfWeek(monthEnd);
        var dateFormat = 'D';
        var rows = [];
        var rKey = 0;
        var days = [];
        var day = startDate;
        var formattedDate = '';
        while (day <= endDate) {
            var _loop_1 = function (i) {
                formattedDate = dateFns.format(day, dateFormat);
                var cloneDay = day;
                var myFormatOfDate = day.getDate() + "." + (day.getMonth() + 1) + "." + day.getFullYear();
                days.push(React.createElement("div", { className: "col cell " + (!dateFns.isSameMonth(day, monthStart)
                        ? 'disabled'
                        : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''), key: i, onClick: function () { return _this.onDateClick(dateFns.parse(cloneDay)); } },
                    React.createElement("span", { className: "number" }, formattedDate),
                    React.createElement("span", { className: "bg" }, formattedDate),
                    data && data.map(function (item, j) {
                        if (item.date === myFormatOfDate && dateFns.isSameMonth(day, monthStart)) {
                            return (React.createElement("div", { className: 'cell__content', key: j },
                                React.createElement("p", null, item.text),
                                React.createElement(Button, { url: item.url }, "See details")));
                        }
                    })));
                day = dateFns.addDays(day, 1);
            };
            for (var i = 0; i < 7; i++) {
                _loop_1(i);
            }
            rows.push(React.createElement("div", { key: 'row' + (++rKey).toString(), className: "row" }, days));
            days = [];
        }
        return React.createElement("div", { className: "calendar__body" }, rows);
    };
    Calendar.prototype.onSelectChange = function (event, type) {
        var safeSearchTypeValue = event.currentTarget.value;
        switch (type) {
            case 'country':
                this.setState({ countrySelectedValue: safeSearchTypeValue });
                break;
            case 'keyword':
                this.setState({ keywordSelectedValue: safeSearchTypeValue });
                break;
            default: return;
        }
    };
    /* FILTERS */
    Calendar.prototype.renderControls = function (data) {
        var _this = this;
        var _a = this.state, keywords = _a.keywords, countries = _a.countries;
        return (React.createElement("div", { className: 'calendar__controls' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12 col-md-4" },
                        React.createElement("span", { className: 'calendar__controls__selectLabel' }, "Search keyword:"),
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, 'keyword'); }, value: this.state.keywordSelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select keyword"),
                                keywords && keywords.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-4" },
                        React.createElement("span", { className: 'calendar__controls__selectLabel' }, "Select country:"),
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, 'country'); }, value: this.state.countrySelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select country"),
                                countries && countries.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-4" },
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.search(data); } }, "Search events"))),
                React.createElement("div", { className: 'calendar__controls__switch' },
                    React.createElement("button", { className: "\n                calendar__controls__switch__btn \n                " + (this.state.switch ?
                            'calendar__controls__switch__btn--active' : ''), onClick: function () { return _this.setState({
                            switch: !_this.state.switch
                        }); } }, "Calendar"),
                    React.createElement("button", { className: "\n                calendar__controls__switch__btn \n                " + (!this.state.switch ?
                            'calendar__controls__switch__btn--active' : ''), onClick: function () { return _this.setState({
                            switch: !_this.state.switch
                        }); } }, "Map")))));
    };
    /* SELECT MOUNTH */
    Calendar.prototype.renderMobileView = function (data) {
        var _this = this;
        var _a = this.state, currentMonth = _a.currentMonth, selectedDate = _a.selectedDate;
        var monthStart = dateFns.startOfMonth(currentMonth);
        var monthEnd = dateFns.endOfMonth(monthStart);
        var startDate = dateFns.startOfWeek(monthStart);
        var endDate = dateFns.endOfWeek(monthEnd);
        var dateFormat = 'D';
        var resultView = [];
        var rKey = 0;
        var days = [];
        var day = startDate;
        var formattedDate = '';
        var daysOfTheWeek = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ];
        var getDayofTheWeek = function (key) { return React.createElement("p", null, daysOfTheWeek[key]); };
        while (day <= endDate) {
            var _loop_2 = function (i) {
                var cloneDay = day;
                var myFormatOfDate = day.getDate() + "." + (day.getMonth() + 1) + "." + day.getFullYear();
                formattedDate = dateFns.format(day, dateFormat);
                if (dateFns.isSameMonth(day, monthStart)) {
                    days.push(React.createElement("div", { className: 'row' },
                        React.createElement("div", { className: "col-2" }, getDayofTheWeek(i)),
                        React.createElement("div", { className: "col-10" },
                            React.createElement("div", { className: "row mobileCell " + (!dateFns.isSameMonth(day, monthStart)
                                    ? 'disabled'
                                    : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''), key: i, onClick: function () { return _this.onDateClick(dateFns.parse(cloneDay)); } },
                                React.createElement("span", { className: "mobileCell__number" }, formattedDate),
                                React.createElement("span", { className: "mobileCell__bg" }, formattedDate),
                                data && data.map(function (item, j) {
                                    if (item.date === myFormatOfDate && dateFns.isSameMonth(day, monthStart)) {
                                        return (React.createElement("div", { className: 'mobileCell__content', key: j },
                                            React.createElement("p", null, item.text),
                                            React.createElement(Button, { url: item.url }, ">")));
                                    }
                                })))));
                }
                day = dateFns.addDays(day, 1);
            };
            for (var i = 0; i < 7; i++) {
                _loop_2(i);
            }
            resultView.push(React.createElement("div", { key: 'col' + (++rKey).toString(), className: 'calendar__mobileBody__week' }, days));
            days = [];
        }
        return React.createElement("div", { className: "calendar__mobileBody" }, resultView);
    };
    Calendar.prototype.render = function () {
        var _this = this;
        var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 767 })); };
        var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 768 })); };
        return (React.createElement(List, { data: this.props.data.dates }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'calendar', style: !_this.state.switch ? { paddingBottom: 0 } : {} },
                _this.renderControls(data),
                _this.state.switch ?
                    React.createElement("div", { className: "container calendar__container" },
                        _this.renderHeader(),
                        React.createElement(Default, null,
                            _this.renderDays(),
                            _this.renderCells(data)),
                        React.createElement(Mobile, null,
                            _this.renderMobileView(data),
                            _this.renderHeader())) :
                    React.createElement(MapComponent, { items: data, controls: false, mapCenter: _this.state.mapCenter })));
        }));
    };
    return Calendar;
}(React.Component));
export default Calendar;
//# sourceMappingURL=Calendar.js.map
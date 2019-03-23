"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dateFns = _interopRequireDefault(require("date-fns"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _MapComponent = _interopRequireDefault(require("../Map/components/MapComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Calendar =
/** @class */
function (_super) {
  __extends(Calendar, _super);

  function Calendar(props) {
    var _this = _super.call(this, props) || this;

    _this.onDateClick = function (day) {
      _this.setState({
        selectedDate: day
      });
    };

    _this.nextMonth = function () {
      _this.setState({
        currentMonth: _dateFns.default.addMonths(_this.state.currentMonth, 1)
      });
    };

    _this.prevMonth = function () {
      _this.setState({
        currentMonth: _dateFns.default.subMonths(_this.state.currentMonth, 1)
      });
    };

    _this.state = {
      switch: true,
      currentMonth: new Date(),
      selectedDate: new Date(),
      dates: _this.props.data.dates || []
    };
    return _this;
  }

  Calendar.prototype.renderHeader = function () {
    var dateFormat = 'MMMM YYYY';
    return _react.default.createElement("div", {
      className: "calendar__header row flex-middle"
    }, _react.default.createElement("div", {
      className: "col col-start",
      onClick: this.prevMonth
    }, _react.default.createElement("div", {
      className: "icon icon--left"
    })), _react.default.createElement("div", {
      className: "col col-center"
    }, _react.default.createElement("h3", null, _dateFns.default.format(this.state.currentMonth, dateFormat))), _react.default.createElement("div", {
      className: "col col-end",
      onClick: this.nextMonth
    }, _react.default.createElement("div", {
      className: "icon icon--right"
    })));
  };

  Calendar.prototype.renderDays = function () {
    var dateFormat = 'dddd';
    var days = [];

    var startDate = _dateFns.default.startOfWeek(this.state.currentMonth);

    for (var i = 0; i < 7; i++) {
      days.push(_react.default.createElement("div", {
        className: "col col-center",
        key: i
      }, _dateFns.default.format(_dateFns.default.addDays(startDate, i), dateFormat)));
    }

    return _react.default.createElement("div", {
      className: "calendar__days row"
    }, days);
  };

  Calendar.prototype.renderCells = function () {
    var _this = this;

    var _a = this.state,
        currentMonth = _a.currentMonth,
        selectedDate = _a.selectedDate;

    var monthStart = _dateFns.default.startOfMonth(currentMonth);

    var monthEnd = _dateFns.default.endOfMonth(monthStart);

    var startDate = _dateFns.default.startOfWeek(monthStart);

    var endDate = _dateFns.default.endOfWeek(monthEnd);

    var dateFormat = 'D';
    var rows = [];
    var rKey = 0;
    var days = [];
    var day = startDate;
    var formattedDate = '';

    while (day <= endDate) {
      var _loop_1 = function _loop_1(i) {
        formattedDate = _dateFns.default.format(day, dateFormat);
        var cloneDay = day;
        var myFormatOfDate = day.getDate() + "." + (day.getMonth() + 1) + "." + day.getFullYear();
        days.push(_react.default.createElement("div", {
          className: "col cell " + (!_dateFns.default.isSameMonth(day, monthStart) ? 'disabled' : _dateFns.default.isSameDay(day, selectedDate) ? 'selected' : ''),
          key: i,
          onClick: function onClick() {
            return _this.onDateClick(_dateFns.default.parse(cloneDay));
          }
        }, _react.default.createElement("span", {
          className: "number"
        }, formattedDate), _react.default.createElement("span", {
          className: "bg"
        }, formattedDate), this_1.state.dates && this_1.state.dates.map(function (item, j) {
          if (item.date === myFormatOfDate && _dateFns.default.isSameMonth(day, monthStart)) {
            return _react.default.createElement("div", {
              className: 'cell__content',
              key: j
            }, _react.default.createElement("p", null, item.text), _react.default.createElement(_Button.default, {
              url: item.url
            }, "See details"));
          }
        })));
        day = _dateFns.default.addDays(day, 1);
      };

      var this_1 = this;

      for (var i = 0; i < 7; i++) {
        _loop_1(i);
      }

      rows.push(_react.default.createElement("div", {
        key: 'row' + (++rKey).toString(),
        className: "row"
      }, days));
      days = [];
    }

    return _react.default.createElement("div", {
      className: "calendar__body"
    }, rows);
  };

  Calendar.prototype.renderControls = function () {
    var _this = this;

    return _react.default.createElement("div", {
      className: 'calendar__controls'
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement("span", {
      className: 'calendar__controls__selectLabel'
    }, "Select date:"), _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", null, _react.default.createElement("option", null, "Date")))), _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement("span", {
      className: 'calendar__controls__selectLabel'
    }, "Search keyword:"), _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", null, _react.default.createElement("option", null, "Keywords")))), _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement("span", {
      className: 'calendar__controls__selectLabel'
    }, "Select country:"), _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", null, _react.default.createElement("option", null, "Country")))), _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement(_Button.default, null, "Search events"))), _react.default.createElement("div", {
      className: 'calendar__controls__switch'
    }, _react.default.createElement("button", {
      className: "\n                calendar__controls__switch__btn \n                " + (this.state.switch ? 'calendar__controls__switch__btn--active' : ''),
      onClick: function onClick() {
        return _this.setState({
          switch: !_this.state.switch
        });
      }
    }, "Calendar"), _react.default.createElement("button", {
      className: "\n                calendar__controls__switch__btn \n                " + (!this.state.switch ? 'calendar__controls__switch__btn--active' : ''),
      onClick: function onClick() {
        return _this.setState({
          switch: !_this.state.switch
        });
      }
    }, "Map"))));
  };

  Calendar.prototype.render = function () {
    return _react.default.createElement("div", {
      className: 'calendar'
    }, this.renderControls(), this.state.switch ? _react.default.createElement("div", {
      className: "container"
    }, this.renderHeader(), this.renderDays(), this.renderCells()) : _react.default.createElement(_MapComponent.default, {
      controls: false,
      items: this.state.dates
    }));
  };

  return Calendar;
}(_react.default.Component);

var _default = Calendar;
exports.default = _default;
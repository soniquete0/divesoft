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
import * as React from 'react';
var HelpPopup = /** @class */ (function (_super) {
    __extends(HelpPopup, _super);
    function HelpPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleList = function () {
            _this.setState({
                active: !_this.state.active,
            });
        };
        _this.state = {
            active: false,
        };
        return _this;
    }
    HelpPopup.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "helpPopup " + (this.state.active ? 'helpPopup--active' : '') + " " },
            React.createElement("div", { className: 'helpPopup__main', style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' }, onClick: function () { return _this.toggleList(); } },
                React.createElement("h4", null, "Potrebujete poraditz")),
            React.createElement("ul", { className: 'helpPopup__list' },
                React.createElement("li", { style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' } },
                    React.createElement("p", null, "Pharmacentrum Bud\u011Bjovick\u00E1"),
                    React.createElement("a", { href: "tel:+420261006330" }, "+420 261 006 330")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' } },
                    React.createElement("p", null, "Pharmacentrum DBK"),
                    React.createElement("a", { href: "tel:+420296825318" }, "+420 296\u00A0825\u00A0318")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' } },
                    React.createElement("p", null, "Pharmacentrum Vyso\u010Dany"),
                    React.createElement("a", { href: "tel:+420266006324" }, "+420 266\u00A0006\u00A0324")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' } },
                    React.createElement("p", null, "Pharmacentrum Hole\u0161ovice"),
                    React.createElement("a", { href: "tel:+420227777699" }, "+420 227 777 699")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/divesoft/images/phoneIcon.svg)' } },
                    React.createElement("p", null, "MEDICON Pharm s.r.o."),
                    React.createElement("a", { href: "tel:+420261006330" }, "+420 261 006 330")))));
    };
    return HelpPopup;
}(React.Component));
export default HelpPopup;
//# sourceMappingURL=HelpPopup.js.map
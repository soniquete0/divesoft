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
var style = {
    width: '100%',
    height: 'auto',
    border: '1px gray',
    background: 'lightsalmon'
};
var AlertNotFound = /** @class */ (function (_super) {
    __extends(AlertNotFound, _super);
    function AlertNotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertNotFound.prototype.render = function () {
        switch (this.props.type) {
            case 'component':
                return (React.createElement("div", { style: style }, "Component was not found !"));
            case 'form':
                return (React.createElement("div", { style: style }, "Form was not found !"));
            default:
                return (React.createElement("div", { style: style }, "Something was not found !"));
        }
    };
    return AlertNotFound;
}(React.Component));
export default AlertNotFound;
//# sourceMappingURL=AlertNotFound.js.map
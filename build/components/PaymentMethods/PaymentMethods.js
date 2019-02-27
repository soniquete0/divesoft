import * as React from 'react';
import Media from '@source/partials/Media';
import List from '../List';
var PaymentMethods = function (props) {
    var _a = props.data, title = _a.title, methods = _a.methods;
    return (React.createElement(List, { data: methods }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'payment-methods' },
            React.createElement("div", { className: 'container' },
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'payment-methods__list grid' }, data && data.map(function (method, i) { return (React.createElement("div", { key: i, className: 'payment-methods__list__item' }, method.image && React.createElement(Media, { key: i, type: 'image', data: method.image }))); })))));
    }));
};
export default PaymentMethods;
//# sourceMappingURL=PaymentMethods.js.map
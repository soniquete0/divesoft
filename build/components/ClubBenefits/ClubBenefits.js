import * as React from 'react';
import Button from '@source/partials/Button';
import Link from '@source/partials/Link';
import ReactMarkdown from 'react-markdown';
import List from '../List';
var ClubBenefits = function (props) {
    var _a = props.data, buttonTitle = _a.buttonTitle, buttonUrl = _a.buttonUrl, conditionsUrl = _a.conditionsUrl, benefits = _a.benefits;
    return (React.createElement(List, { data: benefits }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'club-benefits' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'club-benefits__list grid' }, data && data.map(function (benefit, i) {
                    return (React.createElement("div", { key: i, className: 'club-benefits__list__item' }, benefit.title && React.createElement(ReactMarkdown, { source: benefit.title })));
                })),
                buttonTitle &&
                    React.createElement("div", { className: 'club-benefits__btn-holder' },
                        React.createElement(Button, { url: buttonUrl, classes: 'btn--greenBkg hCenterBlock' }, buttonTitle)),
                conditionsUrl &&
                    React.createElement(Link, { className: 'club-benefits__conditions', url: conditionsUrl && conditionsUrl.url }, "V\u0161eobecn\u00E9 obchodn\u00ED podm\u00EDnky"))));
    }));
};
export default ClubBenefits;
//# sourceMappingURL=ClubBenefits.js.map
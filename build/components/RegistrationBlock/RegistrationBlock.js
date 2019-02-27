import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@source/partials/Button';
import Link from '@source/partials/Link';
var RegistrationBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, btnTitle = _a.btnTitle, btnUrl = _a.btnUrl, conditionsUrl = _a.conditionsUrl;
    return (React.createElement("div", { className: 'registration-block' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            text && React.createElement(ReactMarkdown, { source: text }),
            btnTitle &&
                React.createElement("div", { className: 'registration-block__btn-holder' },
                    React.createElement(Button, { url: btnUrl, classes: 'btn--greenBkg hCenterBlock' }, btnTitle)),
            conditionsUrl &&
                React.createElement(Link, { className: 'registration-block__conditions', url: conditionsUrl && conditionsUrl.url }, "V\u0161eobecn\u00E9 obchodn\u00ED podm\u00EDnky"))));
};
export default RegistrationBlock;
//# sourceMappingURL=RegistrationBlock.js.map
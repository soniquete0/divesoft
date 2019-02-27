import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';
import List from '../List';
var Pharmacies = function (props) {
    var pharmacies = props.data.pharmacies;
    return (React.createElement(List, { data: pharmacies }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'pharmacies' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'pharmacies__divider' },
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/divesoft/images/pharmacies-divider-ad.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/divesoft/images/pharmacies-divider.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/divesoft/images/pharmacies-divider-ad.png' })),
                    React.createElement("br", { style: { clear: 'both' } })),
                React.createElement("div", { className: 'pharmacies__list grid' }, data && data.map(function (pharmacie, i) { return (React.createElement("div", { key: i, className: 'pharmacies__list__item' },
                    pharmacie.image && React.createElement(Media, { type: 'image', data: pharmacie.image }),
                    pharmacie.text && React.createElement(ReactMarkdown, { source: pharmacie.text }))); })))));
    }));
};
export default Pharmacies;
//# sourceMappingURL=Pharmacies.js.map
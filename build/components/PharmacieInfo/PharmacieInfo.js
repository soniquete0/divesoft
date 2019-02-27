import * as React from 'react';
import Media from '@source/partials/Media';
var PharmacieInfo = function (props) {
    var _a = props.data, geo = _a.geo, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, officeHours = _a.officeHours;
    return (React.createElement("div", { className: 'pharmacie-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'pharmacie-info__top-divider' }),
            React.createElement("div", { className: 'pharmacie-info__content' },
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/divesoft/images/phoneIcon.svg', alt: "phone nubmer" }),
                    phone && React.createElement("p", null, phone)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/divesoft/images/geoIcon.svg', alt: "address" }),
                    geo && React.createElement("p", null, geo)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/divesoft/images/officeHours.svg', alt: "office hours" }),
                    officeHours && React.createElement("p", null, officeHours)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    (transportImage && React.createElement(Media, { type: 'image', data: transportImage })) || (React.createElement("img", { src: '/assets/divesoft/images/metro.svg', alt: "metro" })),
                    transport && React.createElement("p", null, transport))),
            React.createElement("div", { className: 'pharmacie-info__bottom-divider' }))));
};
export default PharmacieInfo;
//# sourceMappingURL=PharmacieInfo.js.map
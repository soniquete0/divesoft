import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import List from '../List';
var PromotionsAndDiscounts = function (props) {
    var _a = props.data, title = _a.title, items = _a.items;
    var responsive = {
        400: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }
    };
    var autoPlay = false;
    if (items.length > 3) {
        autoPlay = true;
    }
    return (React.createElement(List, { data: items }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'prom-and-disc' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h3", null, title) || React.createElement("div", { style: { height: 50 } }),
                React.createElement(AliceCarousel, { responsive: responsive, dotsDisabled: true, autoPlay: autoPlay, autoPlayInterval: 6000, stopAutoPlayOnHover: true }, data && data.map(function (item, i) {
                    return (React.createElement("div", { key: i, className: 'prom-and-disc__item' },
                        React.createElement(Link, { url: item.url && item.url.url }, item.image && React.createElement(Media, { type: 'image', data: item.image }))));
                })))));
    }));
};
export default PromotionsAndDiscounts;
//# sourceMappingURL=PromotionsAndDiscounts.js.map
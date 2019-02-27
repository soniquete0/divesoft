import * as React from 'react';
import Link from '@source/partials/Link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import List from '../List';
var PromotionPreviews = function (props) {
    var promotionPreviews = props.data.promotionPreviews;
    var responsive = {
        800: { items: 1 }, 900: { items: 2 }, 1024: { items: 3 }
    };
    var autoPlay = false;
    if (promotionPreviews.length > 3) {
        autoPlay = true;
    }
    return (React.createElement(List, { data: promotionPreviews }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'promotions' },
            React.createElement("div", { className: 'container' },
                React.createElement(AliceCarousel, { responsive: responsive, dotsDisabled: true, buttonsDisabled: true, autoPlay: autoPlay, mouseDragEnabled: true, autoPlayInterval: 6000, stopAutoPlayOnHover: true }, data && data.map(function (item, i) {
                    return (React.createElement("div", { key: i, className: 'promotion-previews__item grid' },
                        React.createElement("div", { className: 'promotion-previews__item__left' },
                            React.createElement("p", { className: 'promotion-previews__item__left__date' }, item.date && item.date)),
                        React.createElement("div", { className: 'promotion-previews__item__right' },
                            React.createElement("p", { className: 'promotion-previews__item__right__title' }, item.title && item.title),
                            React.createElement("p", { className: 'promotion-previews__item__right__description' }, item.description && item.description),
                            React.createElement(Link, { url: item.url && item.url.url, className: 'promotion-previews__item__right__url' }, item.titleUrl && item.titleUrl))));
                })))));
    }));
};
export default PromotionPreviews;
//# sourceMappingURL=PromotionPreviews.js.map
import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Media from '@source/partials/Media';
import List from '../List';
var Gallery = function (props) {
    var slides = props.data.slides;
    var responsive = {
        320: { items: 1 }, 400: { items: 2 }, 700: { items: 3 }, 1024: { items: 4 }
    };
    var autoPlay = false;
    if (slides.length > 4) {
        autoPlay = true;
    }
    return (React.createElement(List, { data: slides }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'gallery' },
            React.createElement("div", { className: 'container' },
                React.createElement(AliceCarousel, { responsive: responsive, dotsDisabled: true, autoPlay: autoPlay, autoPlayInterval: 7000, stopAutoPlayOnHover: true }, data && data.map(function (slide, i) { return (React.createElement("div", { className: 'gallery__item', key: i }, slide.image && React.createElement(Media, { type: 'image', data: slide.image }))); })))));
    }));
};
export default Gallery;
//# sourceMappingURL=Gallery.js.map
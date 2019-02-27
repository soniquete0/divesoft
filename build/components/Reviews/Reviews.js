import * as React from 'react';
import ReviewElement from './components/ReviewElement';
import List from '../List';
var Reviews = function (props) {
    var _a = props.data, title = _a.title, reviews = _a.reviews;
    return (React.createElement(List, { data: reviews }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'reviews' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'reviews__divider' }),
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'reviews__list grid' }, data && data.map(function (review, i) { return (React.createElement(ReviewElement, { key: i, image: review.image, cite: review.cite, starCount: review.starCount })); })))));
    }));
};
export default Reviews;
//# sourceMappingURL=Reviews.js.map
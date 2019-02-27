import * as React from 'react';
import Media from '@source/partials/Media';
import ReactMarkdown from 'react-markdown';
import List from '../List';
var BenefitBlocks = function (props) {
    var _a = props.data, title = _a.title, benefits = _a.benefits;
    return (React.createElement(List, { data: benefits }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'benefit-blocks' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'benefit-blocks__divider' }),
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'benefit-blocks__list grid' }, data && data.map(function (benefit, i) {
                    return (React.createElement("div", { key: i, className: 'benefit-blocks__list__item grid' },
                        React.createElement("div", { className: 'benefit-blocks__list__item__top' },
                            benefit.icon && React.createElement(Media, { type: 'image', data: benefit.icon }),
                            benefit.title && React.createElement("h5", null, benefit.title),
                            benefit.subtitle &&
                                React.createElement("p", { className: 'benefit-blocks__list__item__top__subtitle' }, benefit.subtitle),
                            benefit.text &&
                                React.createElement(ReactMarkdown, { source: benefit.text, className: 'benefit-blocks__list__item__top__text' }),
                            benefit.gradientText &&
                                React.createElement(ReactMarkdown, { source: benefit.gradientText, className: 'benefit-blocks__list__item__top__gradient-text' }),
                            benefit.logo && React.createElement(Media, { type: 'image', data: benefit.logo })),
                        React.createElement("div", { className: 'benefit-blocks__list__item__bottom grid' }, benefit.bottomText && React.createElement(ReactMarkdown, { source: benefit.bottomText }))));
                })),
                React.createElement("div", { className: 'benefit-blocks__divider' }))));
    }));
};
export default BenefitBlocks;
//# sourceMappingURL=BenefitBlocks.js.map
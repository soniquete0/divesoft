var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard } from './components/blogCard';
import SearchBar from '../SearchBar/SearchBar';
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showMore: false
        };
        return _this;
    }
    Blog.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, displaySearch = _a.displaySearch, blogItems = _a.blogItems;
        var blogCards = [];
        var sixBlogCards = [];
        if (blogItems && blogItems.length > 1) {
            blogItems.map(function (item, index) { return (blogCards.push(React.createElement(BlogCard, { title: item.title, text: item.text, key: index, color: item.color, img: item.img, special: item.special && item.special }))); });
            sixBlogCards = blogCards.slice(0, 6);
        }
        return (React.createElement("section", { className: 'blog' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h1", null, title),
                displaySearch && React.createElement(SearchBar, { placeholder: 'Vyhledat téma', barColor: 'gray' }),
                React.createElement(Masonry, { breakpointCols: { default: 3, 4000: 3, 800: 2, 500: 1 }, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, this.state.showMore ? (blogCards) : (sixBlogCards)),
                React.createElement("div", { className: 'blog__blur' },
                    React.createElement("div", null)),
                React.createElement("div", { className: "blog__btnHolder" },
                    React.createElement("button", { className: "btn btn--greenBkg btn--fullWidth btn--" + (this.state.showMore && blogItems.length > 6 ? 'up' : 'down'), onClick: function () { return _this.setState({ showMore: !_this.state.showMore }); } },
                        "Na\u010D\u00EDst dal\u0161\u00ED",
                        React.createElement("span", { className: "arrow" }))))));
    };
    return Blog;
}(React.Component));
export default Blog;
//# sourceMappingURL=Blog.js.map
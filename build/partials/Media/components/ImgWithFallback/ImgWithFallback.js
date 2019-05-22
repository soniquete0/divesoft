"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ImgWithFallback = /** @class */ (function (_super) {
    __extends(ImgWithFallback, _super);
    function ImgWithFallback(props) {
        var _this = _super.call(this, props) || this;
        _this.createVariantIfDoesNotExist = function () {
            if (_this.props.recommendedSizes) {
                fetch(process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/createDimension", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: _this.props.originalData.id,
                        width: parseInt(_this.props.recommendedSizes.width, 10),
                        height: parseInt(_this.props.recommendedSizes.height, 10),
                    }),
                })
                    .then(function (response) {
                    // this.getSizedUrl();
                })
                    .catch(function () {
                    console.error('There was an error creating variant');
                });
            }
        };
        _this.getSizedUrl = function (props) {
            var sizes = props.recommendedSizes;
            if (sizes && sizes.width && sizes.height) {
                var filename = props.originalData.filename.split('.');
                filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
                filename = filename.join('.');
                return props.baseUrl + props.originalData.category + props.hash + '_' + filename;
            }
            return props.originalSrc;
        };
        _this.handleError = function () {
            _this.createVariantIfDoesNotExist();
        };
        _this.state = {
            loading: true,
            error: false
        };
        _this.createVariantIfDoesNotExist = _this.createVariantIfDoesNotExist.bind(_this);
        _this.getSizedUrl = _this.getSizedUrl.bind(_this);
        return _this;
    }
    ImgWithFallback.prototype.render = function () {
        var _this = this;
        var alt = this.props.alt;
        var props = this.props;
        var error = this.state.error;
        return (React.createElement("div", { className: 'mediaRatio', style: {
                paddingTop: (parseInt(props.recommendedSizes ? props.recommendedSizes.height : 1, 10) /
                    parseInt(props.recommendedSizes ? props.recommendedSizes.width : 1, 10)) *
                    100 + "%",
            } },
            React.createElement("img", { alt: alt, className: 'mediaImage inner', src: error ? props.originalSrc : this.getSizedUrl(props), onError: function () {
                    _this.createVariantIfDoesNotExist();
                    _this.setState({ error: true });
                }, onContextMenu: function () {
                    _this.createVariantIfDoesNotExist();
                } })));
    };
    return ImgWithFallback;
}(React.Component));
exports.default = ImgWithFallback;
//# sourceMappingURL=ImgWithFallback.js.map
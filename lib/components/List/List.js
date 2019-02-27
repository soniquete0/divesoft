"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var R = _interopRequireWildcard(require("ramda"));

var _reactAdopt = require("react-adopt");

var _Loader = _interopRequireDefault(require("../../../lib/partials/Loader"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var escape = function escape(str) {
  // TODO: escape %x75 4HEXDIG ?? chars
  return str.replace(/[\"]/g, '\\"').replace(/[\\]/g, '\\\\').replace(/[\/]/g, '\\/').replace(/[\b]/g, '\\b').replace(/[\f]/g, '\\f').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t');
};

var DATASOURCE = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"], ["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"])));
var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  {\n    pageData @client\n    languageData @client\n    projectData @client\n  }\n"], ["\n  {\n    pageData @client\n    languageData @client\n    projectData @client\n  }\n"])));
var GET_ALL_PAGES = (0, _graphqlTag.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query localizedPages($languageId: ID! $projectId: ID!) {\n    pages(where: { website: { project: { id: $projectId } } }) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { \n        language: { id: $languageId }\n      }) {\n        id\n        name\n        createdAt\n        content\n        annotations {\n          key\n          value\n        }\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query localizedPages($languageId: ID! $projectId: ID!) {\n    pages(where: { website: { project: { id: $projectId } } }) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { \n        language: { id: $languageId }\n      }) {\n        id\n        name\n        createdAt\n        content\n        annotations {\n          key\n          value\n        }\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"])));
var AllPagesComposedQuery = (0, _reactAdopt.adopt)({
  getContext: function getContext(_a) {
    var render = _a.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  },
  allPages: function allPages(_a) {
    var render = _a.render,
        _b = _a.getContext,
        languageData = _b.languageData,
        projectData = _b.projectData;

    if (!languageData || !projectData) {
      return render({
        loading: true
      });
    }

    return React.createElement(React.Fragment, null, React.createElement(_reactApollo.Query, {
      query: GET_ALL_PAGES,
      variables: {
        languageId: languageData.id,
        projectId: projectData.id
      }
    }, function (data) {
      var fetchMore = data.fetchMore;
      return render(data);
    }));
  }
});

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.getPaginatingFunction = function (items) {
      var getPage = function getPage(numberOfPage, paginationType, pageSize) {
        if (paginationType === void 0) {
          paginationType = 'pagination';
        }

        if (pageSize === void 0) {
          pageSize = 10;
        }

        var numberOfItems = items.length;
        var lastPage = Math.ceil(items.length / pageSize);
        var cutTo = numberOfPage * pageSize < numberOfItems ? numberOfPage * pageSize : numberOfItems;
        var cutFrom = numberOfPage * pageSize < numberOfItems ? cutTo - pageSize : numberOfPage - 1 && (numberOfPage - 1) * pageSize || 0;
        return {
          items: items.slice(paginationType === 'pagination' ? cutFrom : 0, cutTo),
          lastPage: lastPage
        };
      };

      return getPage;
    };

    _this.datasourcesList = function (data, searchedFragments) {
      return React.createElement(_reactApollo.Query, {
        query: DATASOURCE,
        variables: {
          id: data.datasourceId
        }
      }, function (queryData) {
        var dataShape = data.data,
            error = data.error,
            loading = data.loading;
        var datasourceItems = queryData.data.datasource && queryData.data.datasource.datasourceItems || [];

        if (searchedFragments && searchedFragments.length > 0) {
          datasourceItems = searchedFragments.reduce(function (filteredItems, fragment) {
            return filteredItems.filter(function (page) {
              return JSON.stringify(page).toLowerCase().includes(fragment.toLowerCase());
            });
          }, datasourceItems);
        } // Map datasourceItem data to placeholders


        datasourceItems = datasourceItems.map(function (item) {
          // Iterate through dataShape 
          // in case that value inside some of keys is string
          // try to find key inside item and replace value with it
          var res = __assign({}, dataShape);

          if (data.orderBy) {
            res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item.content);
          }

          if (data.filters) {
            res.filters = data.filters.map(function (filter) {
              var parsedFilter = __assign({}, filter);

              parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item.content);
              return parsedFilter;
            });
          } // Iterate through keys and in case that value inside key is string value 
          // apply replace function which replace dynamic placeholders with dynamic source item values.
          // In case that value of key is url and contains dynamic slug with same entity that we sourcing,
          // replace it with dynamic source item slug.


          Object.keys(res).forEach(function (key) {
            if (typeof res[key] === 'string') {
              var replaced = _this.replaceWithSourceItemValues(res[key], item.content);

              res[key] = replaced;
            } else if (res[key].url) {
              var regex = /ds\:(\w+)/g;
              var result = void 0;
              var newUrl = String(res[key].url);

              while (result = regex.exec(res[key].url)) {
                if (result[1] && result[1] === queryData.data.datasource.type.toLowerCase()) {
                  newUrl = newUrl.replace(result[0], item.slug);
                }
              }

              if (newUrl !== res[key].url) {
                res[key] = {
                  url: newUrl,
                  dynamic: true
                };
              }
            }
          });
          return res;
        }).filter(function (item) {
          return !item.filters || !item.filters.some(function (filter) {
            return !filter.filterBy.toLowerCase().includes(filter && filter.includes && filter.includes.toLowerCase());
          });
        }).filter(function (item, i) {
          return !data.limit || i < data.limit;
        });

        if (error) {
          return React.createElement("span", null, "Error...");
        }

        if (loading) {
          return React.createElement(_Loader.default, null);
        }

        var items = data.orderBy ? datasourceItems.sort(function (a, b) {
          if (data.order === 'DESC') {
            if (a.orderBy > b.orderBy) {
              return -1;
            }

            {
              if (a.orderBy < b.orderBy) {
                return 1;
              }
            }
            return 0;
          }

          if (a.orderBy < b.orderBy) {
            return -1;
          }

          {
            if (a.orderBy > b.orderBy) {
              return 1;
            }
          }
          return 0;
        }).map(function (item) {
          delete item.orderBy;
          return item;
        }) : datasourceItems;
        return _this.props.children({
          data: items,
          getPage: _this.getPaginatingFunction(items)
        });
      });
    };

    return _this;
  }

  List.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        data = _a.data,
        location = _a.location;
    var searchedText = this.props.searchedText;
    var fulltextFilter = data && data.fulltextFilter;
    var regex = /^\[([a-z]*)\]$/;
    var searchParams = new URLSearchParams(location && location.search || '');

    if (fulltextFilter) {
      var res = regex.exec(fulltextFilter.trim());

      if (res && res[1]) {
        var textFromSearchParams = searchParams.get(res[1]);

        if (!textFromSearchParams) {
          return this.props.children({
            data: [],
            getPage: this.getPaginatingFunction([])
          });
        }

        searchedText = (searchedText ? searchedText : '') + " " + (textFromSearchParams ? textFromSearchParams : '');
      } else {
        searchedText = (searchedText ? searchedText : '') + " " + fulltextFilter;
      }
    }

    var searchedFragments = searchedText && searchedText.trim().split(' ').map(function (fragment) {
      return fragment.trim();
    });

    if (Array.isArray(data)) {
      return this.props.children({
        data: data,
        getPage: this.getPaginatingFunction(data)
      });
    } // In case that data isn't array and contain datasourceId try to fetch datasource with his items


    if (data && data.datasourceId) {
      return this.datasourcesList(data, searchedFragments);
    }

    if (data && data.sourceType === 'pages') {
      return React.createElement(AllPagesComposedQuery, null, function (_a) {
        var _b = _a.allPages,
            allPagesData = _b.data,
            allPagesLoading = _b.loading,
            allPagesError = _b.error,
            _c = _a.getContext,
            languageData = _c.languageData,
            pageData = _c.pageData;

        if (allPagesLoading || !allPagesData || !languageData) {
          return React.createElement(_Loader.default, null);
        }

        if (allPagesError) {
          return "Error...";
        }

        var pages = allPagesData.pages;

        if (searchedFragments && searchedFragments.length > 0) {
          pages = searchedFragments.reduce(function (filteredPages, fragment) {
            return filteredPages.filter(function (page) {
              return JSON.stringify(page).toLowerCase().includes(fragment.toLowerCase());
            });
          }, pages);
        }

        var pagesWithTag = pages.filter(function (p) {
          if (!(p.translations && p.translations.length > 0)) {
            return false;
          }

          if (data.tagIds && !p.tags.some(function (t) {
            return data.tagIds.some(function (tagId) {
              return t.id === tagId;
            });
          })) {
            return false;
          }

          if (pageData && p.id === pageData.id) {
            return false;
          }

          return true;
        }).map(function (p) {
          var annotations = {};
          var translation = p && p.translations && p.translations[0];
          translation.annotations.forEach(function (_a) {
            var key = _a.key,
                value = _a.value;
            annotations[key] = value;
          });

          var res = __assign({}, data.data);

          var item = {
            page: {
              name: translation && translation.name || '',
              annotations: annotations
            }
          };

          if (data.orderBy) {
            res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item);
          }

          if (data.filters) {
            res.filters = data.filters.map(function (filter) {
              var parsedFilter = __assign({}, filter);

              parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item);
              return parsedFilter;
            });
          }

          Object.keys(res).forEach(function (key) {
            if (typeof res[key] === 'string') {
              var replaced = _this.replaceWithSourceItemValues(res[key], item);

              res[key] = replaced;
            } else if (res[key].pageSourcedUrl) {
              res[key] = {
                pageId: p.id
              };
            } else if (res[key].dynamiclySourcedImage) {
              var image = void 0;

              try {
                image = JSON.parse(_this.replaceWithSourceItemValues(res[key].dynamiclySourcedImage, item, true) || '{}');
              } catch (e) {
                console.log(e);
              }

              res[key] = image || {};
            }
          });
          return res;
        }).filter(function (item) {
          return !item.filters || !item.filters.some(function (filter) {
            return !filter.filterBy.toLowerCase().includes(filter && filter.includes && filter.includes.toLowerCase());
          });
        }).filter(function (item, i) {
          return !data.limit || i < data.limit;
        });
        pages = data.orderBy ? pagesWithTag.sort(function (a, b) {
          if (data.order === 'DESC') {
            if (a.orderBy > b.orderBy) {
              return -1;
            }

            {
              if (a.orderBy < b.orderBy) {
                return 1;
              }
            }
            return 0;
          }

          if (a.orderBy < b.orderBy) {
            return -1;
          }

          {
            if (a.orderBy > b.orderBy) {
              return 1;
            }
          }
          return 0;
        }).map(function (item) {
          delete item.orderBy;
          return item;
        }) : pagesWithTag;
        return _this.props.children({
          data: pages,
          getPage: _this.getPaginatingFunction(pages)
        });
      });
    }

    return this.props.children({
      data: [],
      getPage: this.getPaginatingFunction([])
    });
  };

  List.prototype.replaceWithSourceItemValues = function (source, item, isImage) {
    var regex = /%([^%]*)%/g;
    var result;
    var replaced = String(source);

    while (result = regex.exec(source)) {
      if (result[1]) {
        try {
          var searchKeys = result[1].split(',');

          if (Array.isArray(searchKeys) && searchKeys.length > 0) {
            var getValueFromDatasourceItems = R.path(searchKeys);
            var replacement = getValueFromDatasourceItems(item);

            if (replacement && typeof replacement === 'string') {
              replaced = replaced.replace(result[0], isImage ? replacement : escape(replacement));
            } else if (replacement && _typeof(replacement) === 'object') {
              replaced = replaced.replace(result[0], JSON.stringify(replacement));
            } else {
              replaced = replaced.replace(result[0], '');
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

    return replaced;
  };

  return List;
}(React.Component);

var _default = (0, _reactRouter.withRouter)(List);

exports.default = _default;
var templateObject_1, templateObject_2, templateObject_3;
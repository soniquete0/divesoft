"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUniqMapControls(data) {
    var uniqCities = [];
    var uniqCountries = [];
    var uniqServices = [];
    var propsToArray = function () {
        for (var i = 0; i < data.length; i++) {
            uniqCountries.push(data[i].country);
        }
        for (var i = 0; i < data.length; i++) {
            uniqCities.push(data[i].city);
        }
        for (var i = 0; i < data.length; i++) {
            uniqServices.push(data[i].service);
        }
    };
    var uniqueArray = function (arr) { return Array.from(new Set(arr)); };
    propsToArray();
    uniqCities = uniqueArray(uniqCities);
    uniqCountries = uniqueArray(uniqCountries);
    uniqServices = uniqueArray(uniqServices);
    return {
        cities: uniqCities.sort(),
        countries: uniqCountries.sort(),
        services: uniqServices.sort()
    };
}
exports.default = getUniqMapControls;
//# sourceMappingURL=getUniqMapControls.js.map
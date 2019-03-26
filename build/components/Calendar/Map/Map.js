import * as React from 'react';
import List from '../../List';
import MapComponent from './components/MapComponent';
var Map = function (props) {
    return (React.createElement(List, { data: props.data.items }, function (_a) {
        var data = _a.data;
        return (React.createElement(MapComponent, { controls: props.data.controls, title: props.data.title, items: data }));
    }));
};
export default Map;
//# sourceMappingURL=Map.js.map
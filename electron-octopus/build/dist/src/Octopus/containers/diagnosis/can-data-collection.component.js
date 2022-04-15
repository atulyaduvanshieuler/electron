import React, { useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { getRequest } from '../../api-service';
import { CSVLink } from 'react-csv';
var ShowCsvDownloadComponent = function (props) {
    var show = props.show, csvData = props.csvData;
    if (show == false) {
        return React.createElement(React.Fragment, null);
    }
    else {
        console.log(csvData);
        return (React.createElement(CSVLink, { data: csvData }, "Download me"));
    }
};
var CanDataCollectionComponent = function (props) {
    var show = props.show;
    var _a = useState(''), csvData = _a[0], updateCsvData = _a[1];
    var _b = useState(false), showCsv = _b[0], updateShowCsv = _b[1];
    var _c = useState(false), disableButton = _c[0], updateDisableButtons = _c[1];
    var startDataLogging = function () {
        if (disableButton === false) {
            updateDisableButtons(true);
            updateShowCsv(false);
            alert('Logging Started. Data will be logged for 30 seconds.');
            getRequest('api/v1/log/can-bus', {})
                .then(function (res) {
                updateDisableButtons(false);
                alert(res.data);
            });
        }
    };
    var getLoggedData = function () {
        if (disableButton === false) {
            updateDisableButtons(true);
            getRequest('api/v1/write_can_data_to_csv', {})
                .then(function (res) {
                updateDisableButtons(false);
                updateCsvData(res.data);
                updateShowCsv(true);
            });
        }
    };
    if (show == false) {
        return React.createElement(React.Fragment, null);
    }
    else {
        return (React.createElement("div", null,
            React.createElement(Grid, { key: 1, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(Button, { className: "button", variant: "contained", onClick: startDataLogging }, "Start")),
                React.createElement(Grid, { item: true, md: 5 },
                    React.createElement(Button, { className: "button", variant: "contained", onClick: getLoggedData }, "Get Data"))),
            React.createElement(ShowCsvDownloadComponent, { show: showCsv, csvData: csvData })));
    }
};
export default CanDataCollectionComponent;
//# sourceMappingURL=can-data-collection.component.js.map
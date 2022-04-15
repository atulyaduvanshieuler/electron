import { __assign } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import TestAllComponent from './test-all.component';
import TestControllerComponent from './test-controller.component';
import TestBmsComponent from './test-bms.component';
import TestStarkComponent from './test-stark.component';
import { getRequest } from '../../api-service';
import CanDataCollectionComponent from './can-data-collection.component';
import './run-tests.component.css';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import TestInProgressComponent from './test-in-progress.component';
//Need to see here whether to use let or const; because i will be changing the state later on
// eslint-disable-next-line prefer-const
var responseState = {
    bms: {
        test_status: '',
        test_errors: [],
    },
    controller: {
        test_status: '',
        test_errors: [],
    },
    stark: {
        test_status: '',
        test_errors: [],
    },
    testall: {
        test_status: '',
        test_errors: [],
    },
};
var DiagnosisComponent = function () {
    var _a = useState(responseState), response = _a[0], updateResponse = _a[1];
    var _b = useState('basic-body'), cssClass = _b[0], updateCSSClass = _b[1];
    var _c = useState(false), canCollectionButtons = _c[0], updateCanCollectionButtons = _c[1];
    var _d = useState(false), testInProgress = _d[0], updateTestInProgress = _d[1];
    var onTestAll = function () {
        updateCSSClass('blur-basic-body');
        updateTestInProgress(true);
        getRequest('api/v1/test/all', {})
            .then(function (res) {
            updateCSSClass('basic-body');
            updateTestInProgress(false);
            updateResponse(__assign(__assign({}, response), { testall: {
                    test_status: res.data.test_status,
                    test_errors: res.data.test_errors,
                } }));
        });
    };
    var onTestStark = function () {
        updateCSSClass('blur-basic-body');
        updateTestInProgress(true);
        getRequest('api/v1/test/stark', {})
            .then(function (res) {
            updateCSSClass('basic-body');
            updateTestInProgress(false);
            updateResponse(__assign(__assign({}, response), { stark: {
                    test_status: res.data.test_status,
                    test_errors: res.data.test_errors,
                } }));
        });
    };
    /**
     * It makes a GET request to the server and updates the response object with the response from the
     * server.
     */
    var onTestBms = function () {
        updateCSSClass('blur-basic-body');
        updateTestInProgress(true);
        getRequest('api/v1/test/bms', {})
            .then(function (res) {
            updateCSSClass('basic-body');
            updateTestInProgress(false);
            updateResponse(__assign(__assign({}, response), { bms: {
                    test_status: res.data.test_status,
                    test_errors: res.data.test_errors,
                } }));
        });
    };
    var onTestController = function () {
        updateCSSClass('blur-basic-body');
        updateTestInProgress(true);
        getRequest('api/v1/test/controller', {})
            .then(function (res) {
            updateCSSClass('basic-body');
            updateTestInProgress(false);
            updateResponse(__assign(__assign({}, response), { controller: {
                    test_status: res.data.test_status,
                    test_errors: res.data.test_errors,
                } }));
        });
    };
    return (React.createElement(StyledEngineProvider, { injectFirst: true },
        React.createElement("div", null,
            React.createElement("div", { className: cssClass },
                React.createElement(Grid, { container: true, direction: 'row', spacing: 3 },
                    React.createElement(Grid, { item: true, md: 3 },
                        React.createElement(Grid, { key: 1, container: true, direction: 'column', spacing: 3 },
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(Button, { className: "round-button", variant: "contained", onClick: onTestStark }, "Test Stark")),
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(TestStarkComponent, __assign({}, response.stark))))),
                    React.createElement(Grid, { item: true, md: 3 },
                        React.createElement(Grid, { key: 2, container: true, direction: 'column', spacing: 3 },
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(Button, { className: "round-button", variant: "contained", onClick: onTestBms }, "Test BMS")),
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(TestBmsComponent, __assign({}, response.bms))))),
                    React.createElement(Grid, { item: true, md: 3 },
                        React.createElement(Grid, { key: 3, container: true, direction: 'column', spacing: 3 },
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(Button, { className: "round-button", variant: "contained", onClick: onTestController }, "Test Controller")),
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(TestControllerComponent, __assign({}, response.controller))))),
                    React.createElement(Grid, { item: true, md: 3 },
                        React.createElement(Grid, { key: 4, container: true, direction: 'column', spacing: 3 },
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(Button, { className: "round-button", variant: "contained", onClick: onTestAll }, "Test All")),
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(TestAllComponent, __assign({}, response.testall))))),
                    React.createElement(Grid, { item: true, md: 3 },
                        React.createElement(Grid, { key: 5, container: true, direction: 'column', spacing: 3 },
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(Button, { className: "round-button", variant: "contained", onClick: function () { return updateCanCollectionButtons(true); } }, "Can Data Collection")),
                            React.createElement(Grid, { item: true, md: 12 },
                                React.createElement(CanDataCollectionComponent, { show: canCollectionButtons })))))),
            testInProgress && React.createElement(TestInProgressComponent, { showTestProgress: testInProgress }))));
};
export default DiagnosisComponent;
//# sourceMappingURL=run-tests.component.js.map
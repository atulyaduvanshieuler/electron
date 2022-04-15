import { __assign } from "tslib";
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import diagnosisRoutes from './diagnosis.routing';
import { Route, Switch } from 'react-router-dom';
var Diagnosis = function () {
    return (React.createElement("div", null,
        React.createElement(Switch, null, diagnosisRoutes.map(function (route) { return React.createElement(Route, __assign({}, route)); }))));
};
export default Diagnosis;
//# sourceMappingURL=diagnosis.container.js.map
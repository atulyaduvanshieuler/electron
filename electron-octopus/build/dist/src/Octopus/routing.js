import { __assign } from "tslib";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FourOhFour from './components/shared/FourOhFour.component';
import WelcomeComponent from './components/shared/welcome.component';
import LoginComponent from './containers/auth/login.component';
import Diagnosis from './containers/diagnosis/diagnosis.container';
var Routes = [
    {
        path: '/login',
        key: 'login',
        exact: true,
        component: LoginComponent
    },
    {
        path: ['/', '/welcome'],
        key: 'welcome',
        exact: true,
        component: WelcomeComponent
    },
    {
        path: '/test',
        key: 'test',
        exact: false,
        component: Diagnosis
    }
];
var RouteWithSubRoutes = function (route) {
    return (React.createElement(Route, { path: route.path, exact: route.exact, render: function (props) { return React.createElement(route.component, __assign({}, props, { routes: route.routes })); } }));
};
export var RenderRoutes = function (_a) {
    var routes = _a.routes;
    return (React.createElement(Switch, null,
        routes.map(function (route) { return React.createElement(RouteWithSubRoutes, __assign({}, route)); }),
        React.createElement(Route, { component: FourOhFour })));
};
export default Routes;
//# sourceMappingURL=routing.js.map
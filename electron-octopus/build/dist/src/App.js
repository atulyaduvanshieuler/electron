import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes, { RenderRoutes } from './Octopus/routing';
import ErrorBoundary from './Octopus/components/shared/ErrorBoundary';
import StartTestingComponent from './Octopus/containers/diagnosis/start-testing.component';
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(ErrorBoundary, null,
        React.createElement(BrowserRouter, { basename: '/' },
            React.createElement(RenderRoutes, { routes: Routes }),
            React.createElement(StartTestingComponent, null)))), document.getElementById('app'));
// function render() {
// 	ReactDOM.render(<h2>Hello from React!</h2>, document.body);
// }
// render();
//# sourceMappingURL=App.js.map
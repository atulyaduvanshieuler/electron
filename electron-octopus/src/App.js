import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes, {RenderRoutes} from './Octopus/routing';
import ErrorBoundary from './Octopus/components/shared/ErrorBoundary';
import StartTestingComponent from './Octopus/containers/diagnosis/start-testing.component';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<BrowserRouter basename={'/'}>
				<RenderRoutes routes={Routes}/>
				<StartTestingComponent />
			</BrowserRouter>
		</ErrorBoundary>
	</React.StrictMode>,
    document.getElementById('app')
)
// function render() {
// 	ReactDOM.render(<h2>Hello from React!</h2>, document.body);
// }
// render();
import React, {ComponentType} from 'react';
import {Route, Switch} from 'react-router-dom';

import FourOhFour from './components/shared/FourOhFour.component';
import WelcomeComponent from './components/shared/welcome.component';
import LoginComponent from './containers/auth/login.component';
import Diagnosis from './containers/diagnosis/diagnosis.container';


export interface RouteProps {
	path: Array<string> | string;
	key: string;
	exact: boolean;
	component: ComponentType
}

const Routes: Array<RouteProps> = [
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
	
]

const RouteWithSubRoutes = (route: any) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => <route.component {...props} routes={route.routes} />}
		/>
	);
}

export const RenderRoutes = ({routes}: any) => {
	return (
		<Switch>
			{
				routes.map((route: RouteProps) => <RouteWithSubRoutes {...route} />)
			}
			<Route component={FourOhFour} />
		</Switch>
	);
}

export default Routes;

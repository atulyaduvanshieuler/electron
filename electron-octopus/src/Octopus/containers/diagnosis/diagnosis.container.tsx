/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import diagnosisRoutes from './diagnosis.routing';
import {Route, Switch} from 'react-router-dom';

const Diagnosis = (): React.ReactElement => {
	return (
		<div>
            <Switch>
			    {diagnosisRoutes.map((route) => <Route {...route} />)}
            </Switch>
		</div>
	);
}

export default Diagnosis;
import React from "react";
import { Switch, Route } from "react-router-dom";

import { DemoView } from './views';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={() => <div>Hello World</div>} />
			<Route path="/demo" component={() => <DemoView />} />
		</Switch>
	)
}

export default Routes;
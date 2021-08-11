import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Game from 'pages/Game/Game'
import Home from 'pages/Home/Home'

const Router = (): JSX.Element => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route path={'/game'} component={Game} />
			</Switch>
		</HashRouter>
	)
}

export default Router

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import People from 'views/People';
import Products from 'views/Products';
import NotFound from 'views/NotFound';


class App extends Component {
    render() {
		return (
			<div>
				<Menu />
				<div className='Page'>




					<Switch>
						<Route exact path={ routeCodes.HOME } component={ Home } />
						<Route path={ routeCodes.PEOPLE } component={ People } />
            <Route path={ routeCodes.PRODUCTS } component={ Products } />
						<Route path='*' component={ NotFound } />
					</Switch>
				</div>
			</div>
		);
    }
}

export default hot(module)(App);

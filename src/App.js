import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navabr from './components/Navbar';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<Navabr />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/home' exact>
					<Home />
				</Route>
				<Route path='/product/:id'>
					<ProductScreen />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navabr = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar  '>
			<nav className='blue-grey darken-2'>
				<div className='nav-wrapper container '>
					<a href='#!' className='brand-logo '>
						<i className='fab fa-amazon hide-on-small-only'></i>
						<span>amazon</span>
					</a>
					<Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link href='#'>Cart</Link>
						</li>
						<li>
							<Link href='#'>Login</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link href='#'>Cart</Link>
				</li>
				<li>
					<Link href='#'>Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navabr;

import React, { useEffect } from 'react';
const Bannar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='bannar-component'>
			<div className='bannar'></div>
			<div className='bannar-overlay'></div>
		</div>
	);
};

export default Bannar;

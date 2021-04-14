import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Rating from './Rating';
const Product = ({ product }) => {
	const [title, setTitle] = useState(product.name);
	useEffect(() => {
		const handleTitle = () => {
			let string = product.name.split('');
			let output = [];
			for (let i = 0; i < 40; i++) {
				output.push(string[i]);
			}
			setTitle(output.join('') + '...');
		};
		handleTitle();
	}, []);

	return (
		<div className='product '>
			<div className='col s10 offset-s1 m6 l3 '>
				<div className='row'>
					<div className='col s12 m12'>
						<div className='card product-card'>
							<div className='card-image'>
								<img src={product.image} alt={product.name} />
							</div>
							<div className='card-content'>
								<p className='product-title'>{title}</p>
								<p className='product-price'>₹ {product.price}</p>
								<Rating rating={product.rating} noOfReviews={product.noOfReviews} />
								<div className='center view-details-button'>
									<Link to={`/product/${product._id}`}>
										<button className='waves-effect waves-light btn yellow darken-3'>
											view details
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;

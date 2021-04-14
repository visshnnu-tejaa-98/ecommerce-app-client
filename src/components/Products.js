import Product from './Product';
import products from '../products';
const Products = () => {
	return (
		<div className='products '>
			<div className='row '>
				{products.map((product) => (
					<Product product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default Products;

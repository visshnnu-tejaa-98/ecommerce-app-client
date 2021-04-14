const Rating = ({ rating, noOfReviews }) => {
	return (
		<div className='rating'>
			{rating >= 1 ? (
				<i className='fas fa-star '></i>
			) : rating >= 0.5 ? (
				<i className='fas fa-star-half-alt'></i>
			) : (
				<i className='far fa-star'></i>
			)}
			{rating >= 2 ? (
				<i className='fas fa-star'></i>
			) : rating >= 1.5 ? (
				<i className='fas fa-star-half-alt'></i>
			) : (
				<i className='far fa-star'></i>
			)}
			{rating >= 3 ? (
				<i className='fas fa-star'></i>
			) : rating >= 2.5 ? (
				<i className='fas fa-star-half-alt'></i>
			) : (
				<i className='far fa-star'></i>
			)}
			{rating >= 4 ? (
				<i className='fas fa-star'></i>
			) : rating >= 3.5 ? (
				<i className='fas fa-star-half-alt'></i>
			) : (
				<i className='far fa-star'></i>
			)}
			{rating >= 5 ? (
				<span>
					<i className='fas fa-star'></i>
					<span className='product-reviews-text'>
						{rating.toFixed(1)} out of {noOfReviews} reviews
					</span>
				</span>
			) : rating >= 4.5 ? (
				<span>
					<i className='fas fa-star-half-alt'></i>
					<span className='product-reviews-text'>
						{rating.toFixed(1)} out of {noOfReviews} reviews
					</span>
				</span>
			) : (
				<span>
					<i className='far fa-star'></i>
					<span className='product-reviews-text'>
						{rating.toFixed(1)} out of {noOfReviews} reviews
					</span>
				</span>
			)}
		</div>
	);
};

export default Rating;

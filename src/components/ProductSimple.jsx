import React from 'react';

const ProductSimple = ({ product, key }) => {
	return (
		<div class="flex flex-wrap w-1/3">
			<div class="w-full p-1 md:p-2">
				<img alt="gallery" class="block object-center w-full rounded-lg" src={product.img} />
				<div class="flex justify-center text-xl text-gray-800">{product.description}</div>
			</div>
		</div>
	);
};

export default ProductSimple;

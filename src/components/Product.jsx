import React from 'react';
import ProductSimple from './ProductSimple';

import {
	cocodev,
	bontag_gold,
	dafotrol_k2_7,
	dafotrol,
	dafo_xt_gold_tab,
	dafovital_gold_syp,
	gastin_ls,
	gastin_dsr,
	dafoace_rz,
	dafoace_sp,
	cgm,
	cortio,
	daflo_d3_fd,
	decofast_ls,
	dafobactum
} from '../assets/index.js';

var products = [
	{
		title: 'Cocodew',
		description: 'Natural way to rejuvenate',
		img: cocodev
	},
	{
		title: 'Bonetag Gold',
		description: 'Perfect combination of Best calcium with Vit D3 and Zinc, Magnesium',
		img: bontag_gold
	},
	{
		title: 'K2-7',
		description: 'Complete combination of Calcium with Vit K2-7',
		img: dafotrol_k2_7
	},
	{
		title: 'Dafo XT Gold',
		description: 'For regular use   ',
		img: dafotrol
	},
	{
		title: 'Dafo XT Gold',
		description: 'New age of Iron combination with Vit D3 and Methylcobalamin',
		img: dafo_xt_gold_tab
	},
	{
		title: 'Dafo XT Gold',
		description: 'New age of Iron combination with Vit D3 and Methylcobalamin',
		img: dafovital_gold_syp
	},
	{
		title: 'Gastin LS',
		description: 'Most effective PPI combination',
		img: gastin_ls
	},
    {
		title: 'Gastin DSR',
		description: 'Most effective PPI combination',
		img: gastin_dsr
	},
    {
		title: 'Dafoace RZ',
		description: 'Choice of NSAID with PPI',
		img: dafoace_rz
	},
    {
		title: 'Dafoace SP',
		description: 'Choice of NSAID',
		img: dafoace_sp
	},
	{
		title: 'CGM',
		description: 'Combination of Collagen Peptite',
		img: cgm
	},
	{
		title: 'Cortio',
		description: 'Most safe Glucocorticoids',
		img: cortio
	},
	{
		title: 'Daflo D3 FD',
		description: 'Newer type of packing in Vit D3',
		img: daflo_d3_fd
	},
	{
		title: 'Decofast LS',
		description: 'Combination for productive Cough',
		img: decofast_ls
	},
	{
		title: 'Dafobactum',
		description: 'The leading Cephalosporin',
		img: dafobactum
	}
];

const Product = () => {
	return (
		<section class="overflow-hidden text-gray-700 ">
			<div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
				<div class="flex flex-wrap -m-1 md:-m-2">
					{products.map(function(object, i) {
						return <ProductSimple product={object} key={i} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Product;

import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import ProductSimple from './ProductSimple';

var products = [
	{
		title: 'Cocodew',
		description: 'Natural way to rejuvenate',
		date: '2021-12-01',
		author: 'Perry Williams',
		img: 'http://www.daffoworth.com/img/cocodew.png'
	},
	{
		title: 'Good News for a Change: Secretarial Order 3362',
		excerpt:
			'in Feburary 2019, the U.S. Secretary of the Interior signed Secretarial Order 3362, a framework designed to improve habitat quality and protect crucial migration corridors for several species of wildlife including pronghorn, elk, and mule deer.',
		date: '2021-12-01',
		author: 'Cody Schroeder',
		img: 'https://source.unsplash.com/dG_p9P6aroQ/800x600'
	},
	{
		title: 'Pygmy Rabbits, an Understudied Icon of the West',
		excerpt:
			'Pygmy rabbits are the world’s smallest, and undoubtedly the cutest, leporid, and one of only two North American rabbits to dig their own burrows.',
		date: '2021-12-01',
		author: 'Miranda Crowell',
		img: 'https://source.unsplash.com/mstHiGp2U6A/800x600'
	},
	{
		title: 'A Wonderful Life: Career Retrospective',
		excerpt:
			'I can’t imagine a better way to have spent my professional life than as a professor of Wildlife Ecology. Kurt Pregitzer, our Chair for several years before 2010 used to say that being a professor was the best job in the world; he was right.',
		date: '2021-12-01',
		author: 'Jim Sedinger',
		img: 'https://source.unsplash.com/3NI9aJGOl-4/800x600'
	}
];

const Billing = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className="pt-6 pb-12 bg-gray-300">
			{products.map(function(object, i) {
				return <ProductSimple product={object} key={i} />;
			})}
		</div>
	</section>
);

export default Billing;

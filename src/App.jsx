import styles from './style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from './components';
import Product from './components/Product';


const App = () => (
	<div className="bg-white w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`bg-white ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				{/* <Billing /> */}
				<Product/>
				{/* <CardDeal /> */}
				<Testimonials />
				{/* <Clients /> */}
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
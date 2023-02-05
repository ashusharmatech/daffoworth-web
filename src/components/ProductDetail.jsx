import React from 'react';

const ProductDetail = ({ setShowModal, product }) => {
	return (
		<React.Fragment>
			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)} />
				<div className="flex items-center min-h-screen px-4 py-8">
					<div class="relative w-2/3 p-4 mx-auto bg-white rounded-md shadow-lg">
						<div class="mx-auto flex flex-wrap">
							<img
								alt="ecommerce"
								class="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200"
								src={product.img}
							/>
							<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
								<h2 class="text-sm title-font text-gray-500 tracking-widest">Daffoworth</h2>
								<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Cocodew</h1>
								<div class="flex mb-4">
									<p class="leading-relaxed">
										Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy
										chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
										brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin
										listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
									</p>
								</div>
								<div className="items-center gap-2 mt-3 sm:flex">
									<button
										className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
										onClick={() => setShowModal(false)}
									>
										By On 1Mg
									</button>
									<button
										className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
										onClick={() => setShowModal(false)}
									>
										Back
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductDetail;

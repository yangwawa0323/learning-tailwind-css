import React from 'react';

const ProductModal = () => {
	return (
		<div
			className='flex items-center justify-center
		min-h-screen bg-slate-100 w-screen
		'
		>
			{/* Card Container */}
			<div
				className='flex flex-col md:flex-row space-x-10
				 w-4/5 m-3 p-6 max-w-3xl py-20 md:justify-center
				 rounded-2xl shadow-2xl
				  bg-white
			
			'
			>
				{/* Image Div */}
				<div className='pl-12 pt-10 mb-10 md:mb-0'>
					<img
						src='/assets/img/demo/product-modal/headphone.png'
						alt=''
						className='w-60 hover:scale-105 duration-200
						mx-auto
						'
					/>
				</div>

				<div className='flex flex-col gap-4 items-center md:items-start'>
					{/* Content */}
					<div className=''>
						{/* Label & Title Container */}
						<div
							className='
						bg-black text-white
						text-sm
						rounded-full py-1 px-3
						w-fit 
						'
						>
							Free Shipping
						</div>
					</div>

					{/* Title */}
					<div className='text-2xl font-medium text-center md:text-left'>
						Razer Kraken Kitty Edt Gaming Headset Quartz
					</div>
					{/* Price Container */}
					<div className='flex flex-col justify-center items-center md:items-start  md:justify-start mb-4 space-y-3'>
						<p className='line-through'>$799</p>
						<p className='text-5xl font-bold'>$599</p>
						<p className='text-sm font-light text-gray-400'>
							This offer is valid until April 3rd or as long as stock lasts!
						</p>
					</div>

					{/* Button Group */}
					<div className='flex w-full'>
						<button
							className='w-full
						bg-blue-600 text-white
						opacity-85
						border-b-blue-800 border-b-8
						hover:border-b-blue-600
						hover:border-t-8
						hover:border-b-0
						hover:border-t-blue-600
						duration-150 transition-all
						rounded-lg
						py-4
						'
						>
							<div className=''>Add to cart</div>
						</button>
					</div>

					{/* Stock */}
					<div className='flex items-center gap-3 group'>
						<div
							className='
						w-3 h-3 bg-green-400 rounded-full
						group-hover:animate-ping
						'
						></div>
						<div className='text-sm'>50+ pcs. in stock</div>
					</div>

					{/* Bottom Buttons Container */}
					<div
						className='flex flex-col  md:flex-row 
						w-full
						items-center justify-center
					gap-4
					'
					>
						<button
							className='flex gap-3 items-center justify-center
						border-2 border-gray-300 rounded-lg shadow-sm
						py-3 px-5
						w-full
						hover:shadow-lg hover:-translate-y-0.5
						duration-150 transition-all
						'
						>
							<img
								src='/assets/img/demo/product-modal/weight.png'
								alt=''
								className='w-8'
							/>
							<span>Add to cart</span>
						</button>

						<button
							className='flex items-center justify-center
						border-2 border-gray-300 rounded-lg shadow-sm
						py-3 px-5 
						w-full
						hover:shadow-lg hover:-translate-y-0.5
						duration-150 transition-all
						'
						>
							<img
								src='/assets/img/demo/product-modal/heart.png'
								alt=''
								className='w-8'
							/>
							<span>Add to wishlist</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;

import React from 'react';

const TransformTransition = () => {
	return (
		<div>
			<h2 className='text-2xl '>Transform and Transition</h2>

			{/* No transition */}
			<button className='px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700'>
				Click me
			</button>

			{/* Transition */}
			<button
				className='
			transition-colors
			duration-700
			hover:scale-110
			px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700'
			>
				Click me
			</button>

			{/* Transition and Transform */}
			<button
				className='
			transition-colors
			ease-in-out 
			delay-150
			duration-1000
			hover:scale-110
			px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700'
			>
				Click me
			</button>

			{/* Transform and Transition */}
			<img
				src='/assets/img/img1.jpg'
				alt=''
				className='
				hover:transform hover:rotate-180 transition
				delay-1000 duration-[4s]
				hover:scale-75 hover:skew-x-12 aspect-square
				'
			/>
		</div>
	);
};

export default TransformTransition;

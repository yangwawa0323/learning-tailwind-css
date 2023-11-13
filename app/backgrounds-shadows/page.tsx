import React from 'react';

const BackgroundShadows = () => {
	return (
		<div className='space-y-20'>
			<h2 className=' text-2xl'>Background Shadows</h2>
			{/* Background Classes */}
			<div
				className='h-96 w-96 bg-blue-300 bg-cover bg-right bg-no-repeat'
				style={{ backgroundImage: 'url("/background-sea.jpg")' }}
			></div>

			{/* Gradients */}
			<div className='text-white text-center leading-10  h-12 w-30 bg-gradient-to-bl from-slate-800 to-red-300'>
				Click me
			</div>

			{/* Shadows */}
			<div className='shadow-lg bg-red-400 flex justify-center items-center'>
				Submit
			</div>
			{/* Mix Blend */}
			<div className='h-20 w-full'></div>
		</div>
	);
};

export default BackgroundShadows;

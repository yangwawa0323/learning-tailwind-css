import React from 'react';

const Colors = () => {
	return (
		<div className='space-y-2'>
			<h2 className=' text-2xl'>Colors</h2>
			{/* Default colors */}
			{/* white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,   */}
			{/* Text Colors */}
			<p className='text-black'>www.51cloudclass.com</p>
			<p className='text-red-500'>www.51cloudclass.com</p>
			<p className='text-slate-500'>www.51cloudclass.com</p>
			<hr />
			{/* Background Colors */}
			<div className='bg-slate-500'>
				<p className='text-red-500'>www.51cloudclass.com</p>
			</div>
			<hr />
			{/* Text Underline */}
			<p className='underline decoration-lime-500 text-red-500'>
				www.51cloudclass.com
			</p>
			<hr />
			{/* Border Colors */}
			<input className='border-blue-500 border-2' />
			<hr />
			{/* Divide Colors */}
			<div className='divide-blue-600 divide-y'>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
			</div>
			{/* Outline Colors */}
			<button className='outline outline-red-400'>Sumbit</button>
			<hr />
			{/* Box Shadow Colors (Opacity defaults to 100) */}
			<button className='bg-cyan-500 shadow-md shadow-blue-500'>Sumbit</button>
			<hr />
			{/* Accent Colors */}
			<input
				className='accent-pink-500'
				type='checkbox'
			/>
			Option1
			<input
				className='accent-red-300'
				type='checkbox'
			/>
			Option2
			<hr />
			{/* Arbitrary Colors */}
			<p className='text-[#fb8500]'>www.51cloudclass.com</p>
		</div>
	);
};

export default Colors;

import React from 'react';

const Sizing = () => {
	return (
		<div className='w-screen space-y-4'>
			<h2 className=' text-2xl'>Sizing</h2>
			{/* Width */}
			<div className='bg-slate-100 w-20'>w-0</div>
			<div className='bg-slate-200 w-60 '>www.51cloudclass.com</div>
			{/* Percentages */}
			<div className='bg-slate-300 w-1/2'>www.51cloudclass.com</div>

			{/* Width of the viewport */}
			{/* <div className='bg-slate-500 w-screen'>www.51cloudclass.com</div> */}

			{/* 100% of container */}
			<div className='bg-slate-300 w-full'>www.51cloudclass.com</div>

			{/* min/max content */}
			<div className='bg-orange-200 w-min'>
				<p>Lorem ipsum dolor</p>
			</div>
			<div className='bg-orange-400 w-fit'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>
			<div className='bg-orange-600 w-max'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
				<p>Lorem ipsum dolor</p>
			</div>

			{/* Arbitrary width */}
			<div className='w-[385px] bg-indigo-200'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>

			{/* Max Width */}
			<div className='min-w-[400px] max-w-md bg-indigo-400'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>
			{/* Height (Most of the same options as widths) */}
			<div className='h-10 bg-amber-200'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>
			{/* Min Height */}
			<div className='min-h-fit bg-amber-400'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>
			{/* Max Height */}

			{/* Full screen height */}
			<div className='h-screen bg-amber-600'>
				<p>Lorem ipsum dolor www.51cloudclass.com</p>
			</div>
		</div>
	);
};

export default Sizing;

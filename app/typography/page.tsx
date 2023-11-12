import React from 'react';

const Typography = () => {
	return (
		<div className='space-y-4'>
			<h2 className='text-2xl'>Typography</h2>
			{/* Font Family  */}
			<p className='font-sans'>www.51cloudclass.com</p>
			<p className='font-mono'>www.51cloudclass.com</p>
			<p className='font-serif'>www.51cloudclass.com</p>

			{/* Font Size  */}
			<p className='text-base'>www.51cloudclass.com</p>
			<p className='text-2xl'>www.51cloudclass.com</p>
			<p className='text-3xl'>www.51cloudclass.com</p>

			{/* Font Weight  */}
			<p className='font-extralight text-3xl'>www.51cloudclass.com</p>
			<p className='font-semibold text-3xl'>www.51cloudclass.com</p>

			{/* Letter Spacing  */}
			<p className='tracking-tighter font-semibold text-3xl'>
				www.51cloudclass.com
			</p>
			<p className='tracking-widest font-semibold text-3xl'>
				www.51cloudclass.com
			</p>

			{/* Text Alignment  */}
			<p className='text-right font-semibold text-3xl bg-slate-300'>
				www.51cloudclass.com
			</p>
			<p className='text-center font-semibold text-3xl bg-slate-500'>
				www.51cloudclass.com
			</p>

			{/* Text Decoration  */}
			<p className='text-center font-semibold text-3xl underline decoration-4'>
				www.51cloudclass.com
			</p>

			{/* Decoration Style  */}
			<p className='underline decoration-dotted text-left font-semibold text-3xl'>
				www.51cloudclass.com
			</p>
			<p className='underline decoration-wavy decoration-orange-400 text-left font-semibold text-3xl'>
				www.51cloudclass.com
			</p>

			{/* Decoration Offset  */}
			<p className='underline underline-offset-8 text-left font-semibold text-3xl'>
				www.51cloudclass.com
			</p>

			{/* Text Transform -- */}
			<p className='text-left font-semibold text-3xl'>www.51CloudClass.com</p>
			<p className='capitalize text-left font-semibold text-3xl'>
				copyright www.51CloudClass.com
			</p>
		</div>
	);
};

export default Typography;

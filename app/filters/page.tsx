import React from 'react';

const Filters = () => {
	return (
		<div className='space-y-6'>
			<h2 className=' text-2xl'>Filters</h2>
			{/* Blur */}
			<div className='blur-[1px] hover:blur-none'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
				quam culpa voluptates eum. A molestiae similique voluptatum in nesciunt!
			</div>
			{/* Brightness */}
			<div className='brightness-50'>
				<img
					className='w-48 h-auto'
					src='/assets/img/img3.jpg'
					alt=''
				/>
			</div>
			<div className='brightness-110'>
				<img
					className='w-48 h-auto'
					src='/assets/img/img3.jpg'
					alt=''
				/>
			</div>

			{/* Contrast */}
			<div className='contrast-75'>
				<img
					className='w-48 h-auto'
					src='/assets/img/img3.jpg'
					alt=''
				/>
			</div>
			{/* Grayscale */}
			<div className='grayscale-[100%]'>
				<img
					className='w-48 h-auto'
					src='/assets/img/img3.jpg'
					alt=''
				/>
				<p className='text-indigo-500'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
					veritatis.
				</p>
			</div>

			{/* Invert */}

			{/* Sepia */}

			{/* Hue Rotate */}
			<div className='-hue-rotate-30'>
				<img
					className='w-48 h-auto'
					src='/assets/img/img3.jpg'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Filters;

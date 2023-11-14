import React from 'react';

const Columns = () => {
	return (
		<div className='space-y-20'>
			<h2 className='text-2xl '>Columns</h2>
			<div className='columns-2 gap-8'>
				<img
					className='w-full'
					src='/assets/img/img1.jpg'
					alt=''
				/>
				<img
					className='w-full'
					src='/assets/img/img2.jpg'
					alt=''
				/>
				<img
					className='w-full break-after-column'
					src='/assets/img/img3.jpg'
					alt=''
				/>
				<img
					className='w-full'
					src='/assets/img/img4.jpg'
					alt=''
				/>
			</div>

			<div className='columns-3 gap-24'>
				<img
					className='w-full'
					src='/assets/img/img3.jpg'
				/>
				<img
					className='w-full break-before-column'
					src='/assets/img/img4.jpg'
				/>
				<img
					className='w-full'
					src='/assets/img/img5.jpg'
				/>
				<img
					className='w-full'
					src='/assets/img/img6.jpg'
				/>
				<img
					className='w-full'
					src='/assets/img/img7.jpg'
				/>
			</div>

			<div className='columns-3xs'>
				<img
					className='w-full aspect-video'
					src='/assets/img/img8.jpg'
				/>
				<img
					className='w-full aspect-square'
					src='/assets/img/img9.jpg'
				/>
				<img
					className='w-full break'
					src='/assets/img/img1.jpg'
				/>
				<img
					className='w-full '
					src='/assets/img/img2.jpg'
				/>
			</div>
		</div>
	);
};

export default Columns;

import React from 'react';

const NotFound = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<img
				src='/dog-eat-page.jpg'
				alt='404 page'
				className='w-auto h-auto'
			/>
			<h2 className='font-bold text-2xl'>Oops! The dog eat your page.</h2>
		</div>
	);
};

export default NotFound;

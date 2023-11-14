import React from 'react';

const Breakpoints = () => {
	return (
		<div>
			<h2 className='text-2xl'>Breakpoints</h2>

			<div
				className='
			w-screen h-32 bg-black
			sm:bg-green-800
			md:bg-blue-800
			lg:bg-yellow-800
			xl:bg-purple-800
			'
			>
				<p className='text-2xl font-bold p-6 text-white'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
					corporis.
				</p>
				<img
					className='hidden lg:block '
					src='/background-sea.jpg'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Breakpoints;

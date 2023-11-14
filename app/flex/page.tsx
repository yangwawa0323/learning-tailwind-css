import React from 'react';

const Flex = () => {
	return (
		<div>
			<h2 className='text-2xl '>Flex</h2>

			{/* Flex and alignment */}
			<div
				className='flex flex-row
			justify-around
			items-center
			flex-wrap
			bg-orange-400 w-screen h-72'
			>
				<div className='h-32 p-10 border border-blue-600 bg-blue-100'>01</div>
				<div className='h-32 p-10 border border-blue-600 bg-blue-100'>02</div>
				<div className='self-start h-32 p-10 border border-blue-600 bg-blue-100'>
					03
				</div>
				<div className='self-end h-32 p-10 border border-blue-600 bg-blue-100'>
					04
				</div>
			</div>

			{/* Flex Column, Gap and Order */}
			<div className='flex flex-col gap-4 w-screen bg-gray-200 items-center'>
				<div className='order-4 p-10 border border-pink-600'>01</div>
				<div className='order-1 p-10 border border-pink-600'>02</div>
				<div className='p-10 border border-pink-600'>03</div>
				<div className='p-10 border border-pink-600'>04</div>
			</div>

			{/* Grow and shrink */}
			<div className='flex w-screen bg-gray-300 flex-wrap flex-row-reverse'>
				<div className='flex-none p-10 w-64 border border-blue-600 bg-blue-100'>
					01
				</div>
				<div className='flex-initial p-10 w-64 border border-blue-600 bg-blue-100'>
					02
				</div>
				<div className='flex-1 p-10 w-64 border border-blue-600 bg-blue-100'>
					03
				</div>
				<div className='flex-1 p-10 w-64 border border-blue-600 bg-blue-100'>
					04
				</div>
			</div>
		</div>
	);
};

export default Flex;

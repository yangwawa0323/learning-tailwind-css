import React from 'react';

const Border = () => {
	return (
		<div className='space-y-20'>
			<h2 className=' text-2xl'>Border</h2>
			{/* Border Width & Colors */}

			<div className='w-1/2 m-3 p-5 border rounded-lg shadow-lg z-10'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
				doloribus!
			</div>

			<div className='w-1/2 m-3 p-5 border-2 rounded-lg shadow-lg z-10'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
				doloribus!
			</div>

			<div className='w-1/2 m-3 p-5 border-y-0 border-x-2 border-indigo-500 rounded-lg shadow-lg z-10'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
				doloribus!
			</div>
			{/* Border Radius */}
			<div>
				<img
					className='rounded-full h-20 w-20 border-2 border-red-400 shadow-md'
					src='/background-sea.jpg'
				/>
			</div>
			{/* Outline */}
			<div className='border text-center shadow-lg hover:shadow-sm'>Submit</div>

			<div className='h-20 w-full'></div>
		</div>
	);
};

export default Border;

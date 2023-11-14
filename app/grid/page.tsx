import React from 'react';

const Grid = () => {
	return (
		<div>
			<h2 className='text-2xl '>Grid</h2>
			{/* Grid cols and rows */}
			<div className='grid grid-cols-3 grid-rows-4 w-screen'>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 1</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 2</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 3</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 4</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 5</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 6</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 7</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 8</div>
				<div className='p-10 border border-blue-600 bg-blue-100'>Item 9</div>
			</div>

			{/* Col and row span */}
			<div className='grid grid-cols-3 gap-4 w-screen bg-gray-200'>
				<div className='col-span-2 row-span-2 p-10 border border-cyan-600 bg-cyan-100'>
					Item 01
				</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 02</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 03</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 04</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 05</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 06</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 07</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 08</div>
				<div className='p-10 border border-cyan-600 bg-cyan-100'>Item 09</div>
			</div>
		</div>
	);
};

export default Grid;

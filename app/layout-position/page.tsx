'use client';
import React, { useState } from 'react';

const LayoutPosition = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='space-y-10'>
			<h2 className=' text-2xl'>Layout Position</h2>
			{/* Positioning */}
			<div className='grandpa relative h-60 w-full bg-slate-400'>
				<h1>grandpa</h1>
				<div className='parent ml-40 w-4/5 bg-orange-300'>
					<h2>parent</h2>
					<div className='children absolute top-0 bg-red-300'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
						voluptatum!
					</div>
				</div>
			</div>

			{/* Top left corner */}
			<div className='relative h-20 w-4/5 bg-orange-300'>
				<div className='absolute top-0 left-40 bg-red-300'>top left corner</div>
			</div>

			{/* Top right corner */}

			{/* Bottom left corner */}

			{/* Bottom right corner */}
			<div className='relative h-20 w-4/5 bg-orange-300'>
				<div className='absolute bottom-0 right-40 bg-red-300'>
					top left corner
				</div>
			</div>

			{/* Span top edge */}
			<div className='relative h-20 w-4/5 bg-orange-300'>
				<div className='absolute top-0 inset-y-0 right-40 bg-red-300'>
					span top corner
				</div>
			</div>

			{/* Span left edge */}

			{/* Span right edge */}

			{/* Span bottom edge */}

			{/* Display Classes */}
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
					veritatis cumque minus recusandae fugit dicta
					<span className='inline-block p-20 h-40 w-40 bg-red-300'>
						inline 01
					</span>
					suscipit ipsam beatae architecto enim. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Similique iste tempora nesciunt, aliquam
					doloremque non! Autem voluptas architecto mollitia sint.
				</p>
			</div>

			<button
				className='p-4 bg-slate-500 shadow-md'
				onClick={() => setShow(!show)}
			>
				Toggle show
			</button>
			<div className={show ? 'hidden' : 'block'}>
				<h1>display: none</h1>
			</div>
			{/* Z-Index */}
			<div className='flex'>
				<div className='h-40 w-40 bg-orange-300 hover:z-10 '></div>
				<div className='h-40 w-40 bg-red-300 -ml-20 hover:z-10'></div>
			</div>

			{/* Floats */}
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					voluptatibus consequuntur nesciunt.
					<img
						className='h-20 w-20 float-left m-10'
						src='/assets/img/img1.jpg'
						alt=''
					/>
					Perferendis autem quaerat dolorem quos ex eum numquam?
				</p>
			</div>
		</div>
	);
};

export default LayoutPosition;

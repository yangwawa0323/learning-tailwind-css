import React from 'react';

const EmailSubscribe = () => {
	return (
		// Background Container
		<div className='h-full w-full bg-zinc-700 flex items-center justify-center'>
			{/* Card */}
			<div className='rounded-2xl p-2 mx-6 bg-zinc-800'>
				{/* Flex Container */}
				<div className='flex flex-col md:flex-row object-fill'>
					{/* Image */}
					<img
						src='/assets/img/demo/email-subscribe/image.jpg'
						alt=''
						className='hover:scale-105 h-80 md:h-60 rounded-l-xl'
					/>
					{/* Content */}
					<div className='p-12 '>
						<h2 className='font-serif text-white text-center md:text-left font-medium text-xl'>
							Get diet and fitness tips in your inbox
						</h2>

						<p className='text-white my-4 text-sm max-w-xs text-center md:text-left'>
							Eat better and exercise better. Sign up for the Diet&Fitness
							newsletter.
						</p>

						<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0  md:space-x-3  mt-5'>
							<input
								type='text'
								placeholder='Enter your email address'
								className='bg-zinc-800 border rounded p-2 px-4 placeholder:text-xs  '
							/>

							<button
								className='px-5 py-3 bg-lime-500 rounded-md
                                hover:bg-lime-700 hover:text-white duration-200
                            '
							>
								Subcribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailSubscribe;

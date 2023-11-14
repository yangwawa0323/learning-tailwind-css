import React from 'react';

const LoginModal = () => {
	return (
		//    Global Containe
		<div className='bg-rose-50 flex items-center justify-center h-screen'>
			{/* Card Container */}
			<div className='relative flex m-6 bg-white shadow-2xl rounded-2xl'>
				{/* Left Side */}
				<div className='p-20'>
					{/* Top Content */}
					<h2 className='font-mono text-4xl font-bold mb-5'>Log In</h2>
					<p className='text-gray-600 font-light mb-10 max-w-sm'>
						Log in to your account to upload or download pictures, videos or
						music.
					</p>
					<input
						type='text'
						placeholder='Enter your email address'
						className='w-full mb-6 border border-gray-300 p-6 rounded-md placeholder:font-light'
					/>

					{/* Middle Content */}
					<div className='flex space-y-6 md:space-y-0 flex-col md:flex-row justify-between items-center'>
						<div className='font-light text-cyan-700'>Forgot password</div>

						<button
							className='
							hover:-translate-y-0.5
						w-full md:w-auto
						space-x-4 flex justify-center items-center rounded-md border
						 hover:bg-cyan-600 bg-cyan-700 text-white p-6
						 duration-300
						 '
						>
							<span>Next</span>
							<svg
								className='w-6'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#ffffff'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path
									stroke='none'
									d='M0 0h24v24H0z'
									fill='none'
								/>
								<line
									x1='5'
									y1='12'
									x2='19'
									y2='12'
								/>
								<line
									x1='13'
									y1='18'
									x2='19'
									y2='12'
								/>
								<line
									x1='13'
									y1='6'
									x2='19'
									y2='12'
								/>
							</svg>
						</button>
					</div>

					{/* Border */}
					<div className='mt-12 border-b border-b-gray-300'></div>

					{/* Bottom Content */}
					<p className='py-6 text-center text-sm font-light text-gray-400'>
						or log in with
					</p>

					{/* Bottom Buttons Container */}
					<div
						className='flex flex-col md:flex-row 
					space-x-0 md:space-x-4
					space-y-6 md:space-y-0'
					>
						<button
							className='
							w-full
							md:w-1/2
							px-4 py-2
							rounded
							hover:shadow-lg
							duration-300
							hover:-translate-y-0.5
						border border-gray-300
						flex items-center justify-center space-x-3'
						>
							<img
								src='/assets/img/demo/login-modal/facebook.png'
								alt=''
								className='w-9'
							/>
							<span>Facebook</span>
						</button>
						<button
							className='
							w-full
							md:w-1/2
							px-4 py-2
							rounded
							hover:shadow-lg
							duration-300
							hover:-translate-y-0.5
						border border-gray-300
						flex items-center justify-center space-x-3'
						>
							<img
								src='/assets/img/demo/login-modal/google.png'
								alt=''
								className='w-9'
							/>
							<span>Google</span>
						</button>
					</div>
				</div>

				{/* Right Side */}
				<img
					src='/assets/img/demo/login-modal/image.jpg'
					alt=''
					className='w-[430px] hidden md:block'
				/>

				{/* Close Button */}
				<div
					className='z-20 group bg-slate-500 md:bg-white 
				
				hover:cursor-pointer hover:-translate-y-0.5 duration-200
			
				rounded-full p-2 absolute top-14 right-14'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
						className='w-6 h-6 text-black group-hove:text-gray-500'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
							fill='none'
						/>
						<line
							x1='18'
							y1='6'
							x2='6'
							y2='18'
						/>
						<line
							x1='6'
							y1='6'
							x2='18'
							y2='18'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;

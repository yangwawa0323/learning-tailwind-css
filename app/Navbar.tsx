import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='sticky z-10 w-full items-center justify-between font-mono text-sm lg:flex'>
			<div className='space-x-6 items-center text-lg fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border shadow-lg dark:bg-zinc-800/30 dark:from-inherit lg:static   lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
				<Link href='/'>
					<span className='pr-4 font-extrabold text-yellow-100'>
						www.51cloudclass.com
					</span>
					tailwind css course
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

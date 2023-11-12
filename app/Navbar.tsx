import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='sticky z-10 w-full items-center justify-between font-mono text-sm lg:flex'>
			<div className='items-center text-2xl fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border shadow-lg dark:bg-zinc-800/30 dark:from-inherit lg:static   lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
				<img
					src='/logo.png'
					alt='logo'
					className='absolute blur-[0.5px] hover:blur-none w-12 h-12 left-20'
				/>
				<Link href='/'>tailwind css course</Link>
			</div>
		</div>
	);
};

export default Navbar;

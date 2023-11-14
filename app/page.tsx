import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<div className='container h-full p-6 max-w-lg'>
				<ul className='mt-6'>
					<li className='text-md border rounded-md p-2 my-4'>
						<Link href='/first-example'>Utility First Example</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/colors'>Colors</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/container-spacing'>Container & Spacing</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/typography'>Typography</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/sizing'>Sizing</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/layout-position'>Layout & Position</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/backgrounds-shadows'>Backgrounds & Shadows</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/border'>
							border rounded-mds & border rounded-md Radius
						</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/filters'>Filters</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/interactivity'>Interactivity</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/breakpoints'>Breakpoints</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/columns'>Column Layouts</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/flex'>Flexbox</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/grid'>Grid</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/transform-transition'>Transform & Transitions</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/animation'>Animation</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/customization'>Customization & Config</Link>
					</li>
					<li className='text-lg border rounded-md  p-2 my-4'>
						<Link href='/dark-mode'>Dark Mode</Link>
					</li>
					<li className='bg-cyan-100 text-lg border rounded-md shadow-lg  p-2 my-4'>
						<Link href='/demos/email-subscribe'>Email subscribe</Link>
					</li>
					<li className='bg-cyan-100 text-lg border rounded-md shadow-lg p-2 my-4'>
						<Link href='/demos/login-modal'>Login modal</Link>
					</li>
				</ul>
				<div className='w-full h-10'></div>
			</div>
		</main>
	);
}

import React from 'react';

const ContainerSpacing = () => {
	return (
		<div>
			<h2 className=' text-2xl'>Container Spacing</h2>
			<div className='container'>
				<h3> Article One</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
					sequi, sunt voluptatem non eum magnam cupiditate? Dicta iste in
					eligendi. Consequuntur velit, officiis optio assumenda omnis culpa
					quam vitae et deserunt vel voluptates incidunt est qui, temporibus
					facere. Quam, veniam laudantium blanditiis debitis commodi culpa
					earum. Est perspiciatis voluptatem voluptatum, sunt facere veritatis
					dolorem quidem in quam labore veniam nesciunt sapiente corrupti quae
					praesentium temporibus placeat eum, quod, consequatur iure.
					Laudantium, consectetur temporibus nam a quis explicabo minus
					similique, dolorem earum animi delectus molestiae sed vero fugiat. Sed
					error sequi dicta expedita vero, fugit voluptatum officia quia? Labore
					et magni reprehenderit eligendi aliquam sapiente, blanditiis fuga at a
					iusto architecto quidem laborum eaque dolore enim in dignissimos ut
					praesentium consequuntur perspiciatis aperiam? Doloribus architecto
					exercitationem, ipsum consequatur voluptatum libero esse reiciendis
					porro nesciunt consectetur commodi quis hic illo omnis laborum.
					Voluptate, ratione aspernatur in sequi distinctio aut quia qui harum.
				</p>
			</div>
			{/* Margin */}
			<h3>Margin</h3>
			<div className='mb-12 bg-slate-100'>mb-4</div>
			{/* <div className='m-4 bg-slate-100'>m-4</div>
			<div className='mx-12 bg-slate-100'>mx-4</div>
			<div className='my-12 bg-slate-100'>my-4</div> */}
			{/* Arbitrary Spacing */}
			{/* <div className='my-[480px] bg-slate-100'>my-[120px]</div> */}
			{/* Padding */}
			<div className='py-12 bg-slate-100'>py-12</div>
			<div className='p-4 bg-slate-500'>p-12</div>
			{/* Space Between X */}
			<div className='space-x-4 flex'>
				<div className='bg-red-100'>01</div>
				<div className='bg-red-200'>02</div>
				<div className='bg-red-300'>03</div>
			</div>
			{/* Space Between Y */}
			<div className='space-y-4'>
				<div className='bg-red-100'>01</div>
				<div className='bg-red-200'>02</div>
				<div className='bg-red-300'>03</div>
			</div>
		</div>
	);
};

export default ContainerSpacing;

'use client';
import React from 'react';

const Interactivity = () => {
	return (
		<div className='space-y-6 flex flex-col duration-300'>
			<h2 className=' text-2xl'>Interactivity</h2>
			<div id='top'></div>
			<a href='#footer'>Scroll to footer</a>
			{/* Hover State Styling */}
			<button
				type='button'
				className='
				hover:bg-orange-500 hover:text-white
				hover:-translate-y-1
				duration-300
				rounded-lg bg-black text-white 
				shadow-xl
				py-3 px-5'
			>
				Submit
			</button>

			{/* Focus State Styling */}
			<button
				type='button'
				className='
				focus:bg-green-500
				duration-300
				rounded-lg bg-black text-white 
				shadow-xl
				py-3 px-5'
			>
				Submit
			</button>

			{/* Active State Styling */}
			<button
				type='button'
				className='
				active:bg-orange-500
				duration-300
				rounded-lg bg-black text-white 
				shadow-xl
				py-3 px-5'
			>
				Submit
			</button>

			{/* Styling based on parent state */}
			<a
				href='#'
				className='
				group p-6 shadow-lg hover:bg-sky-500
				rounded-lg
				bg-white'
			>
				<div className='group-hover:text-red-500'>
					<h3>Card Title</h3>
				</div>
				<p className='group-hover:text-cyan-400'>This is some card text</p>
			</a>

			{/* Pseudo Classes */}
			<ul>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 1</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 2</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 3</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 4</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 5</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 6</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 7</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 8</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 9</li>
				<li className='even:bg-green-200 odd:bg-blue-200'>Item 10</li>
			</ul>

			{/* Cursor */}
			<button
				type='button'
				className='
				active:bg-orange-500
				duration-300
				rounded-lg bg-black text-white 
				shadow-xl
				py-3 px-5
				cursor-progress
				'
			>
				Submit
			</button>

			{/* Resize */}
			<textarea
				name=''
				id=''
				cols={10}
				rows={3}
				className='border border-black rounded min-h-[60px] resize'
			/>

			{/* User Select */}
			<div className='select-none'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, cumque!
			</div>
			<div className='select-text'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, cumque!
			</div>
			<div className='select-all'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, cumque!
			</div>
			<div className='select-auto'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, cumque!
			</div>
			{/* Smooth Scroll Example */}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
				doloremque sit ex minima dicta sunt quaerat aliquam aspernatur labore
				distinctio perspiciatis totam, voluptates omnis inventore vero magnam
				reiciendis? Perspiciatis eligendi temporibus quis repudiandae et esse
				veritatis, dolore iure, mollitia hic est iusto facilis, architecto
				cupiditate voluptas perferendis eaque! Totam ipsam nobis facere quidem
				aut nihil vero iure possimus dolores dolore, quisquam, eos excepturi?
				Iusto deleniti, dolor quibusdam aliquam, provident ipsam fugit ea
				deserunt voluptate tempore nihil earum perspiciatis dolores fugiat
				nostrum vel explicabo adipisci. Explicabo similique dicta illum
				accusamus incidunt voluptatem, atque fugiat animi, doloribus fuga minus
				ducimus tempore quibusdam fugit? Laborum unde molestias omnis quaerat
				reiciendis laboriosam, maxime nihil voluptas distinctio ex expedita
				aliquid aperiam accusamus amet! Recusandae, qui harum, provident maiores
				minus et quas porro nostrum pariatur esse itaque odit assumenda, minima
				perferendis sed dolores velit est sit delectus officiis a nobis placeat
				quo. Voluptates nesciunt, tempore impedit, nobis fugiat delectus
				exercitationem eos libero velit sequi commodi perferendis quis neque
				illum, minima temporibus corporis aspernatur nostrum? Fugiat placeat
				sunt voluptates atque voluptatum rem minus doloribus, aliquid laudantium
				voluptatem tempora neque error autem adipisci magnam, pariatur sed
				deserunt esse vel optio eum. Cupiditate quos animi explicabo in, eaque
				eos ea quam aperiam ab laboriosam pariatur assumenda fugiat dolorem
				dolorum maiores facere, iusto exercitationem cum nesciunt. Expedita,
				ullam. Iste quo deleniti excepturi sint, architecto corrupti.
				Consequuntur molestiae possimus repellendus fugiat velit culpa eaque
				provident, expedita ut facilis est non dicta facere, exercitationem
				nulla soluta quas reprehenderit debitis. Iure totam aspernatur iusto
				magnam libero amet a, corrupti repellendus quis ab vero maiores
				architecto obcaecati accusamus, temporibus vitae explicabo voluptates!
				Odit cum iste asperiores exercitationem veritatis voluptatem impedit
				atque quas officia nulla? Laboriosam tenetur exercitationem natus
				voluptatum perspiciatis modi error sequi vero fuga architecto ipsam ut,
				omnis pariatur dolore voluptates debitis? Minus vitae, delectus
				aspernatur doloribus, laboriosam omnis ea, sint rem quam incidunt unde
				perferendis eos. Enim unde iure modi nisi saepe quidem laborum odio
				molestiae commodi aperiam, eveniet mollitia cumque eos quod quasi
				accusantium soluta sapiente maiores laudantium magni officia est eum
				repellat sed? Odit obcaecati praesentium iste quam. Officiis sint ex est
				quaerat error, aut neque in voluptatum pariatur beatae corrupti adipisci
				enim architecto! Sit consequatur sapiente cum exercitationem
				necessitatibus soluta eveniet nostrum quaerat commodi, quae earum
				adipisci iure tempora. Explicabo aliquam qui voluptate! Dicta nihil ad
				error labore quos mollitia, inventore repellendus, molestiae modi
				temporibus facere est veritatis voluptatum incidunt? Ullam perspiciatis
				excepturi, qui necessitatibus, officiis facilis at totam autem vel
				eligendi optio aperiam magnam mollitia sapiente architecto! Deserunt
				cupiditate inventore amet ea recusandae eius excepturi veritatis
				molestias commodi, quo vitae impedit, officia libero doloremque. Dolor
				quos, odio tempora quae eaque tempore temporibus. Tempora quaerat cum
				dolorum beatae minus similique, id velit quod inventore, repellat earum.
				Voluptatem excepturi at, nihil, blanditiis distinctio quibusdam
				voluptates ipsam, voluptatibus nam corrupti consectetur quod aperiam eum
				accusamus omnis placeat velit? Ipsum facere fugit velit? Itaque quos
				tempore totam rerum, perspiciatis repellendus obcaecati eius sapiente
				ut, omnis iste qui ullam vel amet inventore molestias.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, animi
				necessitatibus quaerat ipsam magni deleniti ducimus exercitationem,
				eligendi obcaecati beatae cupiditate suscipit vitae perspiciatis
				facilis. Dolor mollitia sed non fugit doloremque beatae esse
				perspiciatis vero, modi quae, voluptatum similique earum cupiditate
				nostrum hic? Magni, quibusdam explicabo ratione eveniet totam omnis quae
				ad unde, inventore molestias debitis placeat vitae commodi dolore qui
				error nemo officiis dolores eius sed modi incidunt aliquid. Labore
				ratione laborum reiciendis doloribus dolor tempora ab dolore nostrum in
				odio harum, voluptatibus sint. Vitae repellat voluptates accusamus
				asperiores voluptatibus sed soluta nesciunt fuga nulla expedita magni
				aliquid et praesentium voluptate, in doloremque facilis dignissimos
				molestiae quae amet ea tenetur similique eveniet. Deleniti magnam error
				amet consequatur hic aspernatur est ad adipisci minima nemo earum
				laboriosam quia ratione quis obcaecati nostrum, esse vero odio illum
				veniam. Perspiciatis dolore minima dicta nulla beatae porro ipsam
				dolorum repellendus voluptatum sit autem qui tenetur, voluptates ea
				molestias quis iste eum recusandae odio omnis nesciunt quas deserunt
				sequi error? Soluta adipisci molestiae nesciunt sit doloremque dolores
				officiis perferendis, fuga deleniti porro quisquam quia, amet totam
				exercitationem esse ex recusandae eos deserunt. Eius at repudiandae
				accusamus neque fugiat asperiores doloribus voluptatibus distinctio
				consectetur dolorum tempora assumenda molestias ratione minima ab
				quisquam, autem officia sequi. Velit, vel. Odio quia cum unde iure, sed
				eveniet sequi dolores dicta dolorum laborum a quaerat alias assumenda
				suscipit repellendus? Eos sequi aliquid blanditiis quas illo doloribus?
				Vero, est soluta hic at similique, consectetur nulla magni odio aut quae
				ab? Dolorem voluptas assumenda eveniet ab molestias. Dolores eveniet vel
				deserunt soluta excepturi dignissimos, temporibus porro perspiciatis
				nostrum, voluptate dolore alias sunt neque labore quam cumque, dolorum
				repellat? Quaerat nobis cupiditate dicta incidunt, asperiores quae, sit
				adipisci debitis eum distinctio assumenda voluptate nulla deleniti
				pariatur! Deleniti ducimus, nemo a tempora cum rerum distinctio earum
				maxime. Voluptas harum suscipit a exercitationem fugit animi, cupiditate
				aperiam? Iusto repellat veritatis ea natus laudantium. Delectus
				reiciendis ipsa adipisci obcaecati molestiae! Dignissimos quisquam
				labore quia, nemo, aperiam ipsum delectus nesciunt quis harum amet rerum
				accusamus dolores esse incidunt cum cumque ducimus tempora culpa
				reprehenderit voluptates consectetur facilis laboriosam corporis
				explicabo. Saepe animi numquam quidem, est doloremque ea nesciunt optio
				dignissimos? Quaerat blanditiis vitae illo ipsa totam consequatur quis
				iusto non nostrum, cumque modi consequuntur saepe. Vero et modi nulla,
				est deserunt repellendus tenetur vel architecto illo aliquid quia
				mollitia veritatis veniam iure perferendis! Nisi veritatis amet
				voluptate laboriosam expedita enim, itaque sit optio numquam magnam
				repellendus perspiciatis ex debitis quis maxime dolorem pariatur
				repudiandae. Soluta impedit sunt magnam doloremque quidem, perferendis
				asperiores cupiditate accusantium minima veritatis enim velit,
				reprehenderit earum minus deserunt ad repudiandae. Dolorem sunt
				assumenda deserunt laborum omnis doloribus perspiciatis velit repellat
				vero soluta quis numquam nemo fuga fugiat, sint repellendus placeat
				tempore incidunt cum excepturi sed modi reiciendis tenetur minima!
				Molestiae aliquam, esse at dignissimos sit molestias recusandae
				voluptatibus in deserunt, quo inventore sunt tempore ab quis officia
				iste perspiciatis, hic eligendi vero aperiam! Sapiente dignissimos
				voluptatem tempore, doloribus vero debitis reiciendis quod vitae sequi
				est necessitatibus modi minima soluta. At iusto earum praesentium
				eveniet temporibus cum rerum in similique accusamus corrupti! Quibusdam
				ducimus, error minima esse laborum debitis cumque architecto dolorem eum
				provident. Repudiandae laborum deleniti sed itaque! Aspernatur, mollitia
				libero natus illo officia recusandae modi non omnis? Voluptatibus earum
				esse necessitatibus magnam totam, dicta architecto eveniet laborum aut.
				Similique laudantium incidunt aliquid voluptas earum laboriosam, odio
				itaque assumenda nesciunt! Ducimus minima, sunt iste placeat id
				inventore, accusamus, magni vitae quos saepe porro cumque ut. Provident
				voluptas ipsum vero consequatur, facilis in architecto suscipit quisquam
				ea deserunt est blanditiis asperiores commodi quasi.
			</p>

			<a
				href='#top'
				className='border p-5 shadow-lg'
			>
				scroll to top
			</a>
			<div id='footer'> Footer </div>
			<div className='h-[120px] w-full bg-black'>this is footer</div>
		</div>
	);
};

export default Interactivity;

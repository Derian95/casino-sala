import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { VideoBackGround } from '../components/pages/home/VideoBackGround'
import { SideBar2 } from '../components/ui/SideBar2'

export const Test4 = () => {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	})
	// const bottomShadowValue = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	['-100%', '0%']
	// )
	// const imageValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
	const topShadowValue = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
	const topShadowValue2 = useTransform(scrollYProgress, [0, .5,1], ['20%', '-20%','20%'])
	const shadow  = useTransform(scrollYProgress, [0, 1], [0, 1]) ;
	
	// const [open, setOpen] = useState(false)

	// const openModal = () => {
	// 	setOpen((prev) => !prev)
	// 	console.log(open)
	// }
	return (
		<div 
		// className='bg-gradient-to-tl from-[#0050fc] to-zinc-950'
		>
			<SideBar2 />
			<div className=' w-screen '>
				<div className=' sm:pl-[68px] h-screen  absolute flex items-center z-10  '>
					<div className='h-1/4 w-auto  pl-10 flex flex-col  justify-between'>
						<h1 className='salaName sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-black text-white opacity-0 translate-y-10'>
							NOMBRE SALA
						</h1>
						<p className='address text-white z-0 opacity-0'>
							Direcion Lorem ipsum dolor{' '}
						</p>
					</div>
				</div>
				<VideoBackGround />
			</div>
			<div className='h-auto w-full py-64 overflow-x-hidden' ref={containerRef}>
				<motion.div
					className='flex flex-col items-center mb-10'
					style={{ translateX: topShadowValue }}>
					<p className='text-5xl text-white font-black'>NOSOTROS</p>
					<p className='text-white max-w-3xl text-lg text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						dicta vel suscipit earum dolor doloremque eos quisquam officia, unde
						alias quibusdam mollitia nostrum esse adipisci quaerat labore
						dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facilis dicta vel suscipit earum dolor doloremque
						eos quisquam officia, unde alias quibusdam mollitia nostrum esse
						adipisci quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Facilis dicta vel suscipit earum
						dolor doloremque eos quisquam officia, unde alias quibusdam mollitia
						nostrum esse adipisci quaerat labore dignissimos vero sint?
					</p>
				</motion.div>
				<motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}} className='flex flex-col items-center mb-10  ' style={{translateX:topShadowValue2 }}>
					<p className='text-5xl text-white font-black'>MISION</p>
					<p className='text-white max-w-3xl text-lg text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						dicta vel suscipit earum dolor doloremque eos quisquam officia, unde
						alias quibusdam mollitia nostrum esse adipisci quaerat labore
						dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facilis dicta vel suscipit earum dolor doloremque
						eos quisquam officia, unde alias quibusdam mollitia nostrum esse
						adipisci quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Facilis dicta vel suscipit earum
						dolor doloremque eos quisquam officia, unde alias quibusdam mollitia
						nostrum esse adipisci quaerat labore dignissimos vero sint?
					</p>
				</motion.div>
				<motion.div className='flex flex-col items-center mb-10' style={{opacity:shadow}}>
					<p className='text-5xl text-white font-black'>VISION</p>
					<p className='text-white max-w-3xl text-lg text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						dicta vel suscipit earum dolor doloremque eos quisquam officia, unde
						alias quibusdam mollitia nostrum esse adipisci quaerat labore
						dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facilis dicta vel suscipit earum dolor doloremque
						eos quisquam officia, unde alias quibusdam mollitia nostrum esse
						adipisci quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Facilis dicta vel suscipit earum
						dolor doloremque eos quisquam officia, unde alias quibusdam mollitia
						nostrum esse adipisci quaerat labore dignissimos vero sint?
					</p>
				</motion.div>
			</div>

			

			<div className='sm:pl-[68px] h-screen w-screen flex items-center justify-center'>
				<div className='w-full md:w-96 md:max-w-full mx-auto'>
					<div className='p-6 border border-gray-300 sm:rounded-md'>
						<form method='POST' action='https://herotofu.com/start'>
							<label className='block mb-6'>
								<span className='text-gray-700'>Your name</span>
								<input
									type='text'
									name='name'
									className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
									placeholder='Joe Bloggs'
								/>
							</label>
							<label className='block mb-6'>
								<span className='text-gray-700'>Email address</span>
								<input
									name='email'
									type='email'
									className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
									placeholder='joe.bloggs@example.com'
									required
								/>
							</label>
							<label className='block mb-6'>
								<span className='text-gray-700'>Message</span>
								<textarea
									name='message'
									className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
									placeholder="Tell us what you're thinking about..."></textarea>
							</label>
							<div className='mb-6'>
								<button
									type='submit'
									className='
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          '>
									Contact Us
								</button>
							</div>
							<div>
								<div className='mt-2 text-gray-700 text-right text-xs'>
									by
									<a
										href='https://herotofu.com'
										className='hover:underline'
										target='_blank'>
										HeroTofu
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}


/*<div className='relative sm:pl-[68px]'>
				<ListAnunt />
				<div
					className={`fixed w-screen h-screen top-0  bg-red-500 z-90 ${
						open ? 'translate-y-0' : 'translate-y-[100%]'
					} transition-all duration-200 ease-linear `}>
					<div
						className={`fixed w-screen h-screen   bg-black z-20 ${
							open ? 'translate-y-0' : 'translate-y-[100%]'
						} transition-all duration-200 ease-in-out delay-500`}
						onClick={openModal}></div>
				</div>
				<button onClick={openModal} className='bg-blue-700'>
					open
				</button>
			</div> */

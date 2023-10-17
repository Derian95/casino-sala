import { motion } from 'framer-motion'
import { dataStore } from '../../../store/dataStore'

export const HomeMobile = () => {
	const { casinoInfo } = dataStore()

	return (
		<div className='h-screen w-full relative flex justify-center items-center' id='home'>
			<motion.video
				autoPlay
				loop
				muted
				className='h-screen w-screen object-cover   '>
				<source src={casinoInfo?.promotionalVideoPath} type='video/mp4' />
			</motion.video>
			<div className='bg-gradient-to-r from-slate-950  to-transparent h-screen max-w-[100vw] absolute left-0 z-10'></div>
			<div className='absolute w-full h-full  flex justify-center items-center'>
				<motion.h1 className='salaName sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-black text-white  translate-y-10'>
					{casinoInfo?.name}
				</motion.h1>
			</div>
		</div>
	)
}

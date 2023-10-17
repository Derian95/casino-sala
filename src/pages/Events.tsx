import { motion } from 'framer-motion'
import { ListAnunt } from '../components/pages/anunciament/ListAnunt'

export const Events = () => {
	return (
		<div className=' h-screen min-w-[100vw]'>
			<div className='w-80 h-screen object-cover sticky left-0 z-30'>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: 'backInOut' }}
					className='w-full h-full object-cover'
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
			<ListAnunt />
		</div>
	)
}

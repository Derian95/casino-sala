import { FC, RefObject, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/pages/anunciament/Card'
import useOverlapDetection from '../hooks/useOverlapDetection'
import { dataStore } from '../store/dataStore'

interface Props {
	containerRef: RefObject<HTMLElement>
}
export const NewEvents: FC<Props> = ({ containerRef }) => {
	const { casinoInfo } = dataStore()

	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref, containerRef)

	return (
		<div className='h-screen w-auto flex gap-80 mx-28' id='events'>
			<div
				className='w-80 h-screen object-cover sticky left-0 transition-opacity duration-300 ease-in'
				ref={div1Ref}
				style={{ opacity: isDiv1OnTop ? 0.5 : 1 }}>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: 'backInOut' }}
					className='w-full h-full object-cover'
					src='https://images.pexels.com/photos/3768359/pexels-photo-3768359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
				/>
			</div>
			<div ref={div2Ref} className='z-10 flex gap-64'>
				<motion.div
					initial={{ opacity: 0, translateX: 200 }}
					whileInView={{ opacity: 1, translateX: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 2, ease: 'backInOut' }}
					className='flex flex-col justify-start items-center h-full pt-24'>
					<div>
						<motion.p className='text-6xl text-white font-bold  text-[2.625rem ]  mb-10 '>
							ANUNCIOS
						</motion.p>
						<p className='text-[#DDDDDD] font-normal max-w-md text-[1rem] leading-8 selection:bg-orange-700'>
							No se pierda de nuestros ultimos anuncios
						</p>
					</div>
				</motion.div>
				<div className='flex justify-start  items-center gap-8  flex-nowrap h-full'>
					{casinoInfo?.announcements.map((element) => (
						<Card key={element.idAnnouncement} data={element} />
					))}
				</div>
			</div>
		</div>
	)
}

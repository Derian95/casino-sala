import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useOverlapDetection from '../hooks/useOverlapDetection'
import { Ra } from './Ra'
export const Test6 = () => {
	const boxScrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseWheel = (e: WheelEvent) => {
			const race = 400 // How many pixels to scroll

			if (e.deltaY > 0) {
				// Scroll right
				if (boxScrollRef.current) {
					boxScrollRef.current.scrollLeft += race
				}
			} else {
				// Scroll left
				if (boxScrollRef.current) {
					boxScrollRef.current.scrollLeft -= race
				}
			}
			e.preventDefault()
		}

		const boxScrollElement = boxScrollRef.current

		if (boxScrollElement) {
			boxScrollElement.addEventListener('wheel', handleMouseWheel)
		}

		return () => {
			if (boxScrollElement) {
				boxScrollElement.removeEventListener('wheel', handleMouseWheel)
			}
		}
	}, [])

	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref, boxScrollRef)
	return (
		<div
			className='flex flex-nowrap max-w-[100vw] h-[100vh] overflow-y-auto container-app '
			ref={boxScrollRef}>
			<div className='flex z-10 min-w-fit w-fit mx-40 h-full' id='about'>
				<div className='h-full  flex items-center justify-center gap-14 '>
					<div
						className='w-80 h-full  sticky left-0  -z-10 transition-all duration-300 ease'
						style={{ opacity: isDiv1OnTop ? 0.2 : 1 }}
						ref={div1Ref}>
						<motion.img
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 3, ease: 'backInOut' }}
							className='w-full h-full object-cover '
							src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
							alt=''
						/>
					</div>

					<div ref={div2Ref} className='flex gap-20'>
						<motion.div
							initial={{ opacity: 0, translateX: 200 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: 'backInOut' }}>
							<motion.p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10 '>
								NOSOTROS
							</motion.p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] selection:bg-orange-700'>
								{' '}
								AAAAA Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, translateX: 200 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: 'backInOut' }}>
							<p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10'>
								NOSOTROS
							</p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] '>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, translateX: 200 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: 'backInOut' }}>
							<p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10'>
								NOSOTROS
							</p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] '>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
			<Ra current={boxScrollRef.current} />
			<div className='h-full min-w-[100vw] bg-red-800'></div>
		</div>
	)
}

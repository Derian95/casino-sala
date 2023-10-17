import { motion } from 'framer-motion'
import { Map } from '../components/pages/contact/Map'
import '../index.css'
import { FC, RefObject, useRef } from 'react'
import useOverlapDetection from '../hooks/useOverlapDetection'

interface Props {
	containerRef: RefObject<HTMLElement>
}

export const Contact: FC<Props> = ({ containerRef }) => {
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref, containerRef)

	return (
		<div className=' h-screen w-auto flex gap-40 mx-28' id='contact'>
			<div
				className='w-80 h-screen object-cover sticky left-0 transition-opacity duration-300 ease-in'
				ref={div1Ref}
				style={{ opacity: isDiv1OnTop ? 0.5 : 1 }}>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: 'backInOut' }}
					className='min-w-[320px] h-full object-cover '
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
			<div className='z-40 flex gap-64 min-w-fit' ref={div2Ref}>
				<motion.div
					initial={{ opacity: 0, translateX: 200 }}
					whileInView={{ opacity: 1, translateX: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 2, ease: 'backInOut' }}
					className='flex flex-col justify-start items-center h-full pt-24'>
					<div>
						<motion.p className='text-6xl text-white font-bold  text-[2.625rem ]  mb-10 '>
							CONTACTO
						</motion.p>
						<p className='text-[#DDDDDD] font-normal max-w-md text-[1rem] leading-8 selection:bg-orange-700'>
							Comuniquese con notros ante cualquier duda que tenga.
						</p>
					</div>
				</motion.div>
				<div className='h-full   flex flex-col items-center justify-center'>
				<form action='' className='flex flex-col w-[600px] gap-y-10  px-10 '>
					<div className='w-full group'>
					<input
							type='text'
							placeholder='Nombres'
							className='relative ra  text-white h-11 w-full bg-transparent outline-none'
							 />
						<div className='h-[.2px] w-full  bg-slate-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
						<div className='h-[.2px] w-0 bg-orange-600 group-focus-within:w-full transition-all duration-300 ease-in'></div>
					</div>

					
					<div className='w-full group'>
					<input
							type='text'
							placeholder='Correo'
							className='relative ra  text-white h-11 w-full bg-transparent outline-none'
							 />
						<div className='h-[.2px] w-full  bg-slate-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
						<div className='h-[.2px] w-0 bg-orange-600 group-focus-within:w-full transition-all duration-300 ease-in'></div>
					</div>
					

					<div className='w-full group'>
					<input
							type='text'
							placeholder='Asunto'
							className='relative ra  text-white h-11 w-full bg-transparent outline-none'
							 />
						<div className='h-[.2px] w-full  bg-slate-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
						<div className='h-[.2px] w-0 bg-orange-600 group-focus-within:w-full transition-all duration-300 ease-in'></div>
					</div>
					<div className='w-full h-auto group'>
						<textarea
							className='relative ra text-white  h-24 w-full bg-transparent outline-none '
							placeholder='Mensaje' />
						<div className='h-[.2px] w-full  bg-slate-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
						<div className='h-[.2px] w-0 bg-orange-600 group-focus-within:w-full transition-all duration-300 ease-in'></div>
					</div>
				</form>
				</div>
				<div className='  h-screen w-[600px] bg-red-200'>
					<Map />
				</div>
			</div>
		</div>
	)
}

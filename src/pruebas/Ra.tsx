import { motion } from "framer-motion"
import { RefObject, useRef } from "react";
import useOverlapDetection from "../hooks/useOverlapDetection";



export const Ra = ( objt:RefObject<HTMLElement>) => {

    const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref,objt);
  return (
    <div className='flex z-10 min-w-fit w-fit mx-40 h-full' id='about'>
				<div className='h-full  flex items-center justify-center gap-14 '>
					<div
						className='w-80 h-full  sticky left-0  -z-10 transition-all duration-700 ease'
						style={{ opacity: isDiv1OnTop ? 0.5 : 1 }}
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

					<motion.div
						ref={div2Ref}
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
  )
}

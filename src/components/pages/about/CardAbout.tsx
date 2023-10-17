import { motion, useScroll, useTransform } from 'framer-motion'
import  { FC, useRef } from 'react'

interface Props{
    title:          string
    description:    string
}
export const CardAbout: FC<Props> = ({ title, description }) => {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	})
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
	const opacityText = useTransform(scrollYProgress, [0, .4,1], [0, .1,1])
	const translate = useTransform(scrollYProgress, [0, .7], [-300, 0])
	const translateText = useTransform(scrollYProgress, [0, .6], [-500, 0])
	const position = useTransform(scrollYProgress, [0,.6], [500, 0])

	return (
        <div ref={containerRef} >
            <motion.div  className='h-[110vh] w-screen flex justify-center items-center flex-col'>
            <motion.p style={{translateY: translate, opacity}} className='text-5xl text-white font-black  mb-10'>{ title }</motion.p>

			<div className='flex gap-7'>
                <motion.p style={{translateX:translateText, opacity:opacityText}} className='text-white max-w-md text-lg text-justify'>
                    { description }
                </motion.p>
                <motion.img className='w-60 h-60' style={{translateX:position}} src="https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000" alt="" />
            </div>
            
		</motion.div>
        </div>
		
	)
}

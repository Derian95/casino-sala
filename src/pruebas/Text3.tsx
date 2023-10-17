import { useState } from 'react'
import { ListAnunt } from '../components/pages/anunciament/ListAnunt'
import { VideoBackGround } from '../components/pages/home/VideoBackGround'
import { SideBar2 } from '../components/ui/SideBar2'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'

export const Text3 = () => {
	const [open, setOpen] = useState(false)

	const openModal = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div >
			<div className='w-screen  '>
				<SideBar2 />
				<div className='w-full h-auto'>
					<Parallax pages={6}>
						<ParallaxLayer
							offset={0}
							speed={0.5}
							className=' bg-red-950 h-screen relative'>
							<div className='h-screen w-screen absolute flex justify-center items-center flex-col'>
								<motion.h1
									className='salaName text-6xl font-black text-white z-40 '
									initial={{ opacity: 0, translateY: 50 }}
									animate={{ opacity: 1, translateY: 0 }}
									transition={{ delay: 7, duration: 1 }}>
									NOMBRE SALA
								</motion.h1>
								<p className='text-white'>Direcion Lorem ipsum dolor </p>
							</div>
							<VideoBackGround />
						</ParallaxLayer>

						<ParallaxLayer sticky={{ start: 1, end: 2 }}>
							<div className='flex justify-center items-center h-2/4 '>
								<p className='text-5xl text-white font-black'>NOSOTROS</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							offset={1.5}
							speed={0.5}
							className='flex'
							sticky={{ start: 1.4, end: 2 }}>
							<div className='flex w-full  justify-center pt-[20%] '>
								<p className='text-white max-w-3xl text-lg text-justify'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facilis dicta vel suscipit earum dolor doloremque eos quisquam
									officia, unde alias quibusdam mollitia nostrum esse adipisci
									quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Facilis dicta vel suscipit
									earum dolor doloremque eos quisquam officia, unde alias
									quibusdam mollitia nostrum esse adipisci quaerat labore
									dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Facilis dicta vel suscipit earum dolor
									doloremque eos quisquam officia, unde alias quibusdam mollitia
									nostrum esse adipisci quaerat labore dignissimos vero sint?
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer sticky={{ start: 3, end: 4 }}>
							<div id='ra' className='flex justify-center items-center h-2/4 '>
								<p className='text-5xl text-white font-black'>MISION</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							offset={1.5}
							speed={0.5}
							className='flex'
							sticky={{ start: 3.4, end: 4 }}>
							<div className='flex w-full  justify-center pt-[20%] '>
								<p className='text-white max-w-3xl text-lg text-justify'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facilis dicta vel suscipit earum dolor doloremque eos quisquam
									officia, unde alias quibusdam mollitia nostrum esse adipisci
									quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Facilis dicta vel suscipit
									earum dolor doloremque eos quisquam officia, unde alias
									quibusdam mollitia nostrum esse adipisci quaerat labore
									dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Facilis dicta vel suscipit earum dolor
									doloremque eos quisquam officia, unde alias quibusdam mollitia
									nostrum esse adipisci quaerat labore dignissimos vero sint?
								</p>
							</div>
						</ParallaxLayer>
						<ParallaxLayer sticky={{ start: 5, end: 6 }}>
							<div className='flex justify-center items-center h-2/4 '>
								<p className='text-5xl text-white font-black '>VISION</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							offset={1.5}
							speed={0.5}
							className='flex'
							sticky={{ start: 5.4, end: 6 }}>
							<div className='flex w-full  justify-center pt-[20%] '>
								<p className='text-white max-w-3xl text-lg text-justify'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facilis dicta vel suscipit earum dolor doloremque eos quisquam
									officia, unde alias quibusdam mollitia nostrum esse adipisci
									quaerat labore dignissimos vero sint? Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Facilis dicta vel suscipit
									earum dolor doloremque eos quisquam officia, unde alias
									quibusdam mollitia nostrum esse adipisci quaerat labore
									dignissimos vero sint? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Facilis dicta vel suscipit earum dolor
									doloremque eos quisquam officia, unde alias quibusdam mollitia
									nostrum esse adipisci quaerat labore dignissimos vero sint?
								</p>
							</div>
						</ParallaxLayer>
					</Parallax>
				</div>
			</div>
			<div className='relative pt-[100%]'>
			<div
				className={`fixed w-screen h-screen   bg-red-500 z-20 ${
					open ? 'translate-y-0' : 'translate-y-[100%]'
				} transition-all duration-200 ease-linear `}>
				<div
					className={`fixed w-screen h-screen   bg-blue-500 z-20 ${
						open ? 'translate-y-0' : 'translate-y-[100%]'
					} transition-all duration-200 ease-in-out delay-500`}
					onClick={openModal}></div>
			</div>
			<ListAnunt />
			<button onClick={openModal} className='bg-blue-700'>
				open
			</button>
			</div>
		</div>
	)
}

/*

<motion.div  style={{backgroundColor:opa}}  className=' h-screen w-full flex items-center flex-col '>
                <div className="text-white w-2/4" >
                    <motion.h1  style={{ y: y1, x: -50 }} className="text-6xl font-black text-center">SOBRE NOSOTROS</motion.h1>
                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates magnam maiores deserunt consectetur officiis debitis sit aperiam aspernatur voluptas at odit numquam esse quasi iste laudantium magni, optio omnis?</p>
                </div>
                <div className="w-[.5px] h-64 bg-white"></div>
                <div className="text-white w-2/4">
                    <motion.h1 style={{ y: y1, x: -50 }} className="text-6xl font-black text-center">MISION</motion.h1>
                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates magnam maiores deserunt consectetur officiis debitis sit aperiam aspernatur voluptas at odit numquam esse quasi iste laudantium magni, optio omnis?</p>
                </div>
                <div className="w-[.5px] h-64 bg-white"></div>
                <div className="text-white w-2/4">
                    <motion.h1 className="text-6xl font-black text-center" style={{ y: y2, x: -50 }}>VISION</motion.h1>
                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates magnam maiores deserunt consectetur officiis debitis sit aperiam aspernatur voluptas at odit numquam esse quasi iste laudantium magni, optio omnis?</p>
                </div>
               
            </motion.div>
*/

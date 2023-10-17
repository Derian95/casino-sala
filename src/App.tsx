import { useEffect, useRef } from 'react'
import { Detail } from './components/pages/anunciament/Detail'
import { SideBar } from './components/ui/SideBar'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NewAbout } from './pages/NewAbout'
import { NewEvents } from './pages/NewEvents'
import useMouseWheelScroll from './hooks/useMouseWheelScroll '

import image from './assets/ra.jpg'
import { Equalizer } from './components/ui/Equalizer'
import { useUiStore } from './store/uiStore'
import { motion, useMotionValue } from 'framer-motion'

export const App = () => {
	const boxScrollRef = useRef<HTMLDivElement>(null)
	const { cursorStyle, cursorStyleDetail } = useUiStore()

	useMouseWheelScroll(boxScrollRef)

	// if(isFetching) return <div className={`h-screen w-screen bg-red-950 absolute ${isFetching ? 'block':'hidden'}`}></div>
	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-1000)

	useEffect(() => {
		const moveCursor = (e: any) => {
			cursorX.set(e.clientX - 15)
			cursorY.set(e.clientY - 15)
		}
		window.addEventListener('mousemove', moveCursor)
		return () => {
			window.removeEventListener('mousemove', moveCursor)
		}
	}, [])
	return (
		<div>
			<Detail />

			<div
				className='flex flex-nowrap max-w-[100vw] h-[100vh] overflow-y-hidden container-app bg-gray-950 '
				ref={boxScrollRef}>
				<img
					src={image}
					alt=''
					className='h-screen w-screen fixed z-[0] object-cover'
				/>
				<div className='fixed h-screen w-screen z-0 bg-gradient-to-r from-slate-900 to-slate-950/95'></div>

				<motion.div
					className={`${cursorStyle ? 'cursorHover ' : ''} ${
						cursorStyleDetail ? 'cursorHoverText' : ''
					} cursor z-50 bg-red-600`}
					style={{
						translateX: cursorX,
						translateY: cursorY,
					}}></motion.div>
				<SideBar />
				<Equalizer />
				<Home />
				<NewAbout containerRef={boxScrollRef} />
				<NewEvents containerRef={boxScrollRef} />
				<Contact containerRef={boxScrollRef} />
			</div>
		</div>
	)
}

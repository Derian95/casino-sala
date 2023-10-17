import { useEffect, useRef, useState } from 'react'
import { useUiStore } from '../../../store/uiStore'
import { dataStore } from '../../../store/dataStore'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// const images = [
// 	'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
// 	'https://i0.wp.com/www.completesports.com/wp-content/uploads/Casino-Games.jpg?fit=754%2C424&ssl=1&is-pending-load=1',
// 	'https://media.istockphoto.com/id/1158005632/es/foto/el-crupier-sostiene-una-bola-de-ruleta-en-un-casino-en-la-mano.jpg?s=612x612&w=0&k=20&c=8oruAF1PQdov8bHkHcKSuI2dRz6tcuKIlibwNgVY_qc=',
// ]

// const variants = {
// 	enter: (direction: number) => {
// 		return {
// 			x: direction > 0 ? 1000 : -1000,
// 			opacity: 0,
// 		}
// 	},
// 	center: {
// 		zIndex: 1,
// 		x: 0,
// 		opacity: 1,
// 	},
// 	exit: (direction: number) => {
// 		return {
// 			zIndex: 0,
// 			x: direction < 0 ? 1000 : -1000,
// 			opacity: 0,
// 		}
// 	},
// }


export const Detail = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
	const { showDetail, changeStateDetail,changeCursorStateDetail } = useUiStore()
    const [imgLoad, setImgLoad] = useState(false)

    const {announcement } = dataStore()
    const onLoadImgReady=() => {
      setImgLoad(true)
      
    }
	

    useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		const handleWheel = (evt: WheelEvent) => {
			evt.preventDefault()
			scrollContainer.scrollTop += evt.deltaY * 2.4
		}

		scrollContainer.addEventListener('wheel', handleWheel)

		return () => {
			scrollContainer.removeEventListener('wheel', handleWheel)
		}
	}, [])
    useEffect(() => {
    
    }, [imgLoad])
    
	return (
		<div 
			className={`fixed bg-slate-900 h-screen    w-screen z-[150]  transition-transform duration-500 ease-in-out ${
				showDetail ? 'translate-y-0' : 'translate-y-full'
			}`}

			
            >

		<div className='h-full w-full flex justify-center items-center sm:flex-row flex-col'>
            <div className='w-2/4 h-full relative'>
                <div className='absolute h-screen w-full bg-gradient-to-t from-slate-900  to-transparent'></div>
                {/* <img src={announcement?.announcementsMedia[0].pathWeb} alt=""  className='  h-full w-full object-cover ' onLoad={onLoadImgReady}/> */}
                <Slide cssClass='slider' >
                {
                    announcement?.announcementsMedia.map(element=>(
                        <img key={element.idAnnouncementMedia} src={element.pathWeb} alt=""  className='  h-full w-full object-contain ' onLoad={onLoadImgReady}/>
                    ))
                }
                </Slide>
               
               
                

            </div>
            <div className='h-full w-2/4 overflow-hidden ' ref={scrollContainerRef} onClick={changeStateDetail} onMouseEnter={changeCursorStateDetail} onMouseLeave={changeCursorStateDetail}>
                <div className='w-full min-h-screen flex flex-col items-center justify-center'>
                    <p className='text-5xl text-white font-bold   mb-10'>
                        {announcement?.title}
                    </p>
                    <p className='text-[#DDDDDD] font-light max-w-xl text-[1.275rem] w-full' dangerouslySetInnerHTML={{__html:announcement?.description!}}>
                    </p>
                </div>
            </div>

       
        </div>
		</div>
	)
}

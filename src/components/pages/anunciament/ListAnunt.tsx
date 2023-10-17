// import { FC } from "react"
// import { Card } from './Card'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const ListAnunt = () => {

	return (
		<div className='flex justify-center items-center w-full '>
<div
			className=' w-full lg:w-3/4 h-auto gap-4  grid grid-cols-1 px-4  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 content-center  justify-center '
      // className='flex gap-12 w-auto flex-nowrap justify-center items-center  h-screen'
      >
			{/* <Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card /> */}
		</div>
		</div>
		
	)
}

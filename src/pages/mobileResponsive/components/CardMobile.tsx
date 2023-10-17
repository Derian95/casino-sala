import { Variants, motion } from 'framer-motion'
import { useUiStore } from '../../../store/uiStore'
import { dataStore } from '../../../store/dataStore'
import '../../../components/pages/anunciament/Card.css'
import { FC } from 'react'
import { Announcement } from '../../../interface/casino'
import { CSSPropertiesI } from '../../../components/ui/SideBar'

const cardVariants: Variants = {
	hidden: { opacity: 0, scale: 0.7 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.5,
			type: 'spring',
		},
	},
}
const imagen =
	'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80'


interface Props{
	data:Announcement
}



export const CardMobile: FC<Props> = ({data}) => {

	const { title, typeAnnouncement } = data
	const { changeStateDetail, changeCursorState } = useUiStore()
	const { casinoInfo } = dataStore()

	const {setAnnouncement} = dataStore()
	
	const onClickCard=() => {
		
		changeStateDetail()
		setAnnouncement(data)
	}
	const styles: CSSPropertiesI = {
		'--colorCard': casinoInfo?.color!,
		color: casinoInfo?.color!,
	}


	return (
		<motion.div
			onMouseLeave={changeCursorState}
			onMouseEnter={changeCursorState}
			viewport={{ once: true }}
			variants={cardVariants}
			initial='hidden'
			whileInView='show'
			onClick={onClickCard}
			style={styles}
			className='card panel h-96 w-[400px]  rounded-lg  bg-[#2c3036] min-w[320px]  flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-colors duration-200 ease-in overflow-hidden'>
			<img
				src={imagen}
				alt=''
				className='h-full w-full absolute left-0 group-hover:scale-110 duration-300 ease group-hover:rotate-6'
			/>
			<div className='h-full w-full absolute left-0 bg-gradient-to-t from-slate-900  to-transparent group-hover:bg-none transition-all duration-500   '>
				<div className='absolute  bottom-0 left-4 h-full py-4 group-hover:opacity-0 transition-all duration-500'>
					<div className='flex justify-between flex-col h-full'>
						<p className={`text-[#ffffff] font-medium  max-w-fit px-2 ${typeAnnouncement==0 ? 'bg-red-400':'bg-blue-500'} rounded-sm`}>
							{typeAnnouncement == 0 ? 'Promoción':'Evento'}
						</p>
						<div>
							<p className='text-xl text-white font-bold'>{title}</p>
							<p className='text-base text-white font-light'>
							</p>
						</div>
					</div>
				</div>

				<div className='absolute -bottom-2 -right-2'>
					<div className='relative w-14 h-14 flex justify-center items-center '>
						<div className='flex justify-center items-center button-float h-2 w-2  rounded-full  group-hover:w-full group-hover:h-full transition-all duration-200 ease-in buttom-card'>
							<div className='bg-white w-0 h-0 group-hover:w-5 group-hover:h-[.5px] absolute transition-all duration-300'></div>
							<div className='bg-white w-0 h-0 group-hover:h-5 group-hover:w-[.5px] absolute transition-all duration-300'></div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

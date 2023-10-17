import '../../SideBar.css'
import { CSSPropertiesI } from '../SideBar'
import { dataStore } from '../../../store/dataStore'
import { useUiStore } from '../../../store/uiStore'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export const SideBarResponsive = () => {
	const { casinoInfo } = dataStore()
	const {  changeStateMenu } = useUiStore()

	const [isOpen, setOpen] = useState(false)

	const toggleMenu = () => {
		// setShowMenu((prev) => !prev)
		changeStateMenu()
	}

	const styles: CSSPropertiesI = {
		'--mi-variable': casinoInfo?.color!,
		color: casinoInfo?.color!,
	}

	return (
		<div className='w-full fixed z-50'>
			<div className='flex flex-col '>
				<div className='backdrop-blur-lg brightness-125 bg-[hsla(0,0%,100%,.05)]  flex gap-4 justify-between px-4 py-2 items-center  mx-4 m-2 rounded-lg'>
					<img
						src={casinoInfo?.logoPathWeb}
						alt=''
						style={{ width: 55, objectFit: 'cover' }}
					/>
					<p className='text-white'>{casinoInfo?.name}</p>
					<Hamburger toggled={isOpen} toggle={setOpen} color='white' />
				</div>
				<div
					className={` backdrop-blur-lg brightness-125 bg-[hsla(0,0%,100%,.05)]  rounded-lg mt-4  ${
						isOpen ? 'translate-x-0 py-4 mx-4 m-2' : 'translate-x-full'
					}`}>
					<ol className='flex gap-3 flex-col justify-center items-center'>
						<ul className='mb-2' onClick={toggleMenu}>
							<a
								href='#home'
								className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 px-4 font-bold max-w-fit  menu-botom`}
								style={styles}>
								INICIO
							</a>
						</ul>
						<ul className='mb-2' onClick={toggleMenu}>
							<a
								href='#about'
								className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 px-4 font-bold max-w-fit    menu-botom`}
								style={styles}>
								NOSOTROS
							</a>
						</ul>
						<ul className='mb-2' onClick={toggleMenu}>
							<a
								href='#events'
								className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 px-4 font-bold max-w-fit menu-botom`}
								style={styles}>
								EVENTOS
							</a>
						</ul>
						<ul className='mb-2' onClick={toggleMenu}>
							<a
								href='#contact'
								className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 px-4 font-bold max-w-fit  menu-botom`}
								style={styles}>
								CONTACTO
							</a>
						</ul>
					</ol>
				</div>
			</div>
		</div>
	)
}

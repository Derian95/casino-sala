import '../SideBar.css'
import { useUiStore } from '../../store/uiStore'
import { dataStore } from '../../store/dataStore'

export interface CSSPropertiesI {
	[key: string]: string | number
}

export const SideBar = () => {
	const { casinoInfo } = dataStore()
	//const [showMenu, setShowMenu] = useState(false)
	const { changeCursorState, showMenu, changeStateMenu } = useUiStore()
	const toggleMenu = () => {
		// setShowMenu((prev) => !prev)
		changeStateMenu()
	}

	const styles: CSSPropertiesI = {
		'--mi-variable': casinoInfo?.color!,
		color: casinoInfo?.color!,
	}

	return (
		<aside
			className={`aside ${showMenu ? 'show' : 'hide'} group `}
			onMouseEnter={changeCursorState}
			onMouseLeave={changeCursorState}>
			<div
				className='aside-contain group-hover:brightness-150 transition-all duration-200 ease-out'
				onClick={toggleMenu}>
				<img
					src={casinoInfo?.logoPathWeb}
					alt='logo'
					style={{ width: 55, objectFit: 'cover' }}
				/>
				{/* <img src={casinoInfo?.name} alt='logo tr' style={{ height: 110 }} /> */}
				<p className='rotate-90 text-xl font-bold'>{casinoInfo?.name}</p>
				<div className='h-16 w-16 relative flex items-center justify-center '>
					<div
						className={`rounded-full h-12 w-12 bg-white flex items-center justify-center  menu-botom`}
						style={styles}>
						<span className={`z-10 text-xl font-semibold `}>+</span>
					</div>
				</div>
			</div>
			<div className='menu'>
				<div>
					<p
						style={{
							color: 'white',
							fontSize: 25,
							fontWeight: 'bold',
							textAlign: 'center',
							marginBottom: 15,
						}}>
						EXPLORE
					</p>
					<div>
						<ol>
							<ul className='mb-2' onClick={toggleMenu}>
								<a
									href='#home'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold   menu-botom`}
									style={styles}>
									INICIO
								</a>
							</ul>
							<ul className='mb-2' onClick={toggleMenu}>
								<a
									href='#about'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold    menu-botom`}
									style={styles}>
									NOSOTROS
								</a>
							</ul>
							<ul className='mb-2' onClick={toggleMenu}>
								<a
									href='#events'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold menu-botom`}
									style={styles}>
									EVENTOS
								</a>
							</ul>
							<ul className='mb-2' onClick={toggleMenu}>
								<a
									href='#contact'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold  menu-botom`}
									style={styles}>
									CONTACTO
								</a>
							</ul>
						</ol>
					</div>
				</div>

				<p style={{ color: 'white', fontSize: 12 }}>
					{casinoInfo?.socialNetworks.map(social=>(
						<span key={social.idIcon}>{social.name}</span>
					))}
				</p>

				<p style={{ color: 'white', fontSize: 12 }}>
				{casinoInfo?.contactEmails.map(social=>(
						<span key={social.idContactEmail}>{social.email}</span>
					))}
				</p>

				<p style={{ color: 'white', fontSize: 12 }}>
				{casinoInfo?.contactPhones.map(social=>(
						<span key={social.idContactPhone}>{social.phoneNumber}</span>
					))}
				</p>
			</div>
		</aside>
	)
}

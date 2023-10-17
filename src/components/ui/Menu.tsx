

import { useUiStore } from "../../store/uiStore"

export const Menu = () => {
    
    const { showMenu } = useUiStore()
  return (
    <div
				className={`fixed transition-transform duration-500 ease-in-out w-screen h-screen bg-orange-500 z-30 ${
					showMenu ? 'translate-x-0 ' : 'translate-x-full delay-200'
				}`}>
				<div
					className={`fixed transition-transform duration-500 ease-in-out w-full h-full bg-black z-30 ${
						showMenu ? 'translate-x-0 delay-200' : 'translate-x-full '
					} pl-36`}>
					<div className='flex flex-col justify-center  h-full gap-y-6'>
          <p
						className={`text-white text-3xl ${
							showMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						INICIO
					</p>
					<p
						className={`text-white text-3xl ${
							showMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						NOSOTROS
					</p>
					<p
						className={`text-white text-3xl ${
							showMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						ANUNCIOS
					</p>
					<p
						className={`text-white text-3xl ${
							showMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						CONTACTO
					</p>
					<p className='absolute text-white right-10  rotate-90 text-2xl font-bold'>
						MENU
					</p>
          </div>
				</div>
			</div>
  )
}

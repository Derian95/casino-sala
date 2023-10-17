import { Equalizer } from './Equalizer'
import { Twirl as Hamburger } from 'hamburger-react'
import { useUiStore } from '../../store/uiStore'

export const SideBar4 = () => {
	
	const { changeStateMenu, showMenu } = useUiStore()
	
	return (
		<div className='w-20 flex right-0 border-l-[0.5px] border-white flex-col justify-between py-10 backdrop-blur-lg backdrop-brightness-150 fixed h-screen z-30'>
			<div className='flex justify-center items-center'>
				<h1 className='text-white'>Logo</h1>
			</div>
			<div className='flex justify-center items-center'>
				<Hamburger toggled={ showMenu } toggle={ changeStateMenu } color='white' />
			</div>

			<div className='flex justify-center items-center'>
				<Equalizer />
			</div>
		</div>
	)
}

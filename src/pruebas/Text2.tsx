import { Loader } from '../components/ui/Loader'
import { SideBar4 } from '../components/ui/SideBar4'
import { About } from '../pages/About'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'
import { Menu } from '../components/ui/Menu'
import { Detail } from '../components/pages/anunciament/Detail'

export const Text2 = () => {

	return (
		<div className='relative  h-auto bg-gradient-to-b from-[#00091d] to-slate-950 '>
			<Loader />
      <Menu/>
      <Detail/>
			<SideBar4 />
			<Home />
			<About />
			<Events />
		</div>
	)
}

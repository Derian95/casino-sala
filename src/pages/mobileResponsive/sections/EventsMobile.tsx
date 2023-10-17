import { ListEvents } from "../components/ListEvents"

export const EventsMobile = () => {
	return (
		<div className='w-full flex flex-col items-center gap-20 py-20' id="events">
            	<img
				src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
				className='w-full h-96'
				alt=''
			/>
			<p className='text-3xl text-center text-white font-bold  text-[2.625rem ]  mb-10 '>
						ANUNCIOS
					</p>
            <div  className='flex flex-col justify-start  items-center gap-8  flex-nowrap h-full'>
                <ListEvents/>
            </div>
		</div>  
	)
}

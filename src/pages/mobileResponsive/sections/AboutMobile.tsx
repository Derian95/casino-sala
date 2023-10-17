import { dataStore } from '../../../store/dataStore'

export const AboutMobile = () => {
	const { casinoInfo } = dataStore()

	return (
		<div className='w-full py-20 ' id='about'>
			<img
				src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
				className='w-full h-96'
				alt=''
			/>
			<div className='flex flex-col items-center justify-center gap-10 mt-20  px-20 '>
            <p className='text-3xl text-center text-white font-bold  text-[2.625rem ]  mb-10 '>
						SOBRE NOSOTROS
					</p>
			<p className='text-white text-3xl font-bold'>Nuestra historia</p>
			<p
				dangerouslySetInnerHTML={{ __html: casinoInfo?.history! }}
				className='text-[#DDDDDD] font-normal leading-8'>
                
            </p>
            <p className='text-white text-3xl font-bold'>Nuestra misión</p>
			<p
				dangerouslySetInnerHTML={{ __html: casinoInfo?.mission! }}
				className='text-[#DDDDDD] font-normal leading-8'>
                
            </p>
            <p className='text-white text-3xl font-bold'>Nuestra visión</p>
			<p
				dangerouslySetInnerHTML={{ __html: casinoInfo?.vision! }}
				className='text-[#DDDDDD] font-normal leading-8'>
                
            </p>
            </div>
		</div>
	)
}

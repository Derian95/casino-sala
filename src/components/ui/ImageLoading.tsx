import { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
	src: string
}
export const ImageLoading: FC<Props> = ({ src }) => {
	const [imageLoaded, setImageLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setImageLoaded(true)
		}
		img.src = src
	}, [src])

	return (
		<div className='w-full h-96 lg:h-full bg-red-400'>
			{!imageLoaded && (
				<div className='w-full h-full object-cover'>
						<Skeleton count={1} width={'100%'} height={'100%'} className='p-1'/>
				</div>
			)}
			{imageLoaded && (
				<img
					src={src}
					alt=''
					className='w-full h-full object-cover'
				/>
			)}
		</div>
	)
}

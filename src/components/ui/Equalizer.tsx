import { useRef, useState } from 'react'
import { dataStore } from '../../store/dataStore'

export const Equalizer = () => {
	const [onSound, setOnSound] = useState(true)
	const audioRef = useRef<HTMLAudioElement>(null)


	const { casinoInfo } = dataStore()

	const onSoundInit = () => {
		setOnSound((prev) => !prev)
		togglePlay()
	}

	const togglePlay = () => {
		const audio = audioRef.current
		if (audio!.paused) {
			audio!.play()
		} else {
			audio!.pause()
		}
	}

	return (
		<div className='fixed bottom-10 left-10 z-40'>
			<div className='equalizer cursor-pointer' onClick={onSoundInit}>
				<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
				<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
				<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
				<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
				<audio
					loop
					ref={audioRef}
					src={casinoInfo?.musicPath}
				/>
			</div>
		</div>
	)
}

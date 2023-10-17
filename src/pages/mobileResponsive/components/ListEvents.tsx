import { dataStore } from '../../../store/dataStore'
import { CardMobile } from './CardMobile'

export const ListEvents = () => {
	const { casinoInfo } = dataStore()

	return (
		<div className=' gap-8 grid grid-cols-1  '> 
			{casinoInfo?.announcements.map((element) => (
				<CardMobile key={element.idAnnouncement} data={element} />
			))}
		</div>
	)
}

export interface ResponseCasino {
	success: boolean
	data: Casino
	displayMessage: string
	errorMessage: string[]
	code: number
}
export interface Casino {
	idCasino: number
	name: string
	logoPath: string
	promotionalVideoPath: string
	logoPathWeb: string
	promotionalVideoPathWeb: string
	musicPathWeb: string
	musicPath: string
	color: string
	latitude: number
	longitude: number
	address: string
	history: string
	mission: string
	vision: string
	contactEmails: Email[]
	contactPhones: Phones[]
	contactCustomers: any[]
	announcements: Announcement[]
	socialNetworks: SocialNetwork[]
}

export interface Email{
email:string
idCasino:number
idContactEmail:number
}

export interface Phones {
	idContactPhone: number
	idCasino: number
	phoneNumber: string
	priority: number
	state: boolean
}

export interface Announcement {
	idAnnouncement: number
	idCasino: number
	typeAnnouncement: number
	title: string
	description: string
	publishAt: string
	startDate: string
	endDate: string
	priority: number
	state: boolean
	announcementsMedia: AnnouncementMedia[]
}

interface SocialNetwork {
	idSocialNetwork: number
	idIcon: number
	idCasino: number
	name: string
	uri: string
	priority: number
	state: boolean
	icon: Icon
}

interface Icon {
	idIcon: number
	name: string
	class: string
	from: string
	unicode: string
	tags: string
	priority: number
	state: boolean
	socialNetworks: any[]
}

interface AnnouncementMedia {
	idAnnouncementMedia: number
	idAnnouncement: number
	path: string
	announcement: string
	pathWeb: string
}

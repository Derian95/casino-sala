


import {create} from 'zustand'
import { Announcement, Casino } from '../interface/casino'




interface DataState{
    casinoInfo:         Casino | null
    announcement:       Announcement | null
    setCasinoInfo:      (obj:Casino | null) => void
    setAnnouncement:    (obj:Announcement | null) => void
}




export const dataStore = create<DataState>( set => ({
    casinoInfo:         null,
    announcement:       null,
    setCasinoInfo:      (obj) =>set({ casinoInfo:obj}),
    setAnnouncement:    (obj) =>set({ announcement:obj})
   
})) 
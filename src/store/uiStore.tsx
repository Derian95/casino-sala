


import { create } from 'zustand'

interface UiState{
    showMenu:                boolean
    showDetail:              boolean
    cursorStyle:             boolean
    cursorStyleDetail:       boolean
    changeStateMenu:         ()=>void
    changeStateDetail:       ()=>void
    changeCursorState:       ()=>void
    changeCursorStateDetail: ()=>void
}

export const useUiStore = create<UiState>( set => ({

    showMenu:                 false,
    showDetail:               false,
    cursorStyle:              false,
    cursorStyleDetail:        false,
    changeStateMenu:          () => set( state => ({ showMenu: !state.showMenu })),
    changeStateDetail:        () => set( state => ({ showDetail: !state.showDetail })),
    changeCursorState:        () => set( state => ({ cursorStyle: !state.cursorStyle })),
    changeCursorStateDetail:  () => set( state => ({ cursorStyleDetail: !state.cursorStyleDetail })),

})) 
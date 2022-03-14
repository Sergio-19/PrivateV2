
const initialState = {
    isOpen: false
}


export const navReducer = (state = initialState, action) => {
    switch(action.type) {
            case OPEN_MENU:
                return {...state, isOpen: !state.isOpen}

        default:
            return state
    }
}


export const OPEN_MENU = 'OPEN_MENU'


export function openMenuActionCreator(payload) {
    return {
        type: OPEN_MENU,
        payload
    }
}
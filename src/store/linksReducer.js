const initialState = {
    links: {},
    currentLink: ''
}



export function linksReducer(state = initialState, action) {
        switch(action.type) {
            case FETCH_LINKS:
                return {...state, links: action.payload}
            case CURRENT_LINK:
                return {...state, currentLink: action.payload}    



            default:
                return state
        }
}


export const FETCH_LINKS = 'FETCH_LINKS'
export const CURRENT_LINK = 'CURRENT_LINK'

export function fetchLinksActionCreator(payload){
    return {type: FETCH_LINKS, payload}
}

export function currentLinkActionCreator(payload) {
    return {type: CURRENT_LINK, payload}
}
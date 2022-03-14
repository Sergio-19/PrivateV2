

const initialState = {
    visible1: false,
    visible2: false,
    sell: 'BTCUSDT',
    buy: 'ETHUSDT'
}


export const tradeReducer = (state = initialState, action) => {
    switch(action.type) {
            case OPEN_SELECT1:
                return {...state, visible1: !state.visible1}
            case OPEN_SELECT2:
                return {...state, visible2: !state.visible2}  
            case GET_SELL:
                return {...state, sell: action.payload}  
            case GET_BUY:
                return {...state, buy: action.payload}        


        default:
            return state
    }
}


export const OPEN_SELECT1 = 'OPEN_SELECT1'
export const OPEN_SELECT2 = 'OPEN_SELECT2'

export const GET_SELL = 'GET_SELL'
export const GET_BUY = 'GET_BUY'


export function getSellActionCreator(payload) {
    return {type: GET_SELL, payload}
}

export function getBuyActionCreator(payload) {
    return {type: GET_BUY, payload}
}

export function select1ActionCreator(payload) {
    return {
        type: OPEN_SELECT1,
        payload
    }
}

export function select2ActionCreator(payload) {
    return {
        type: OPEN_SELECT2,
        payload
    }
}
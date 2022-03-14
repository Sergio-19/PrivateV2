import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'
import icon5 from '../img/icon5.png'



const initialState = {
        currencies: [
                {name: 'BTCUSDT',
                 course: 39071.83,
                 img: icon1,
                 volume: '193 190 811.14 USDT',
                 diff: -4.77, 
                 id: 1},
                 {name: 'ETHUSDT',
                 course: 2743.82,
                 img: icon2,
                 volume: '12 758 016.120 USDT',
                 diff: -7.97,
                 id: 2},
                 {name: 'XRPUSDT',
                 course: 0.74103,
                 img: icon3,
                 volume: '961 788.70000 USDT',
                 diff: -5.55,
                 id: 3},
                 {name: 'LTCUSDT',
                 course: 106.878,
                 img: icon4,
                 volume: '255 450.485 USDT',
                 diff: -5.99,
                 id: 4},
                 {name: 'BCHUSDT',
                 course: 313.71,
                 img: icon5,
                 volume: '226 116.47 USDT',
                 diff: -4.22,
                 id: 5},
        ],
        current: 1,
        different: ''
}

function randomBool() {
    let num = Math.round(Math.random()*100)
    return Boolean(num%2)
}








export const mainReducer = (state = initialState, action) => {
        switch(action.type) {
                case GET_CURRENT:
                        return {...state, current: action.payload}
                case DIF_BTC:
                        const newObj = state.currencies[0]
                        newObj.course = state.currencies[0].course = randomBool() ? state.currencies[0].course + 0.003 : 
                                                                                   state.currencies[0].course - 0.004
                        const newArr = [...state.currencies]
                        newArr.slice(0,1, newObj)                                                           
                        return {...state, currencies: [...newArr], different: newObj.id} 
                case DIF_ETH:
                        const newObj1 = state.currencies[1]
                        newObj1.course = state.currencies[1].course = randomBool() ? state.currencies[1].course + 0.003 : 
                                                                                   state.currencies[1].course - 0.004
                        const newArr1 = [...state.currencies]
                        newArr1.slice(1,1, newObj1)                                                           
                        return {...state, currencies: [...newArr1], different: newObj1.id} 
                case DIF_XRP:
                        const newObj2 = state.currencies[2]
                        newObj2.course = state.currencies[2].course = randomBool() ? state.currencies[2].course + 0.003 : 
                                                                                   state.currencies[2].course - 0.004
                        const newArr2 = [...state.currencies]
                        newArr2.slice(2,1, newObj2)                                                           
                        return {...state, currencies: [...newArr2], different: newObj2.id} 
                case DIF_LTC:
                        const newObj3 = state.currencies[3]
                        newObj3.course = state.currencies[3].course = randomBool() ? state.currencies[3].course + 0.003 : 
                                                                                   state.currencies[3].course - 0.004
                        const newArr3 = [...state.currencies]
                        newArr3.slice(3,1, newObj3)                                                           
                        return {...state, currencies: [...newArr3], different: newObj3.id}
                case DIF_BCH:
                        const newObj4 = state.currencies[4]
                        newObj4.course = state.currencies[4].course = randomBool() ? state.currencies[4].course + 0.003 : 
                                                                                   state.currencies[4].course - 0.004
                        const newArr4 = [...state.currencies]
                        newArr4.slice(4,1, newObj4)                                                           
                        return {...state, currencies: [...newArr4], different: newObj4.id}                                        

            default:
                return state
        }
}

export const GET_CURRENT = 'GET_CURRENT'


export const DIF_BTC = 'DIF_BTC'
export const DIF_ETH = 'DIF_ETH'
export const DIF_XRP = 'DIF_XRP'
export const DIF_LTC = 'DIF_LTC'
export const DIF_BCH = 'DIF_BCH'

export function difBTCActionCreator(payload) {
        return {type: DIF_BTC, payload}
}
export function difETHActionCreator(payload) {
        return {type: DIF_ETH, payload}
}
export function difXRPActionCreator(payload) {
        return {type: DIF_XRP, payload}
}
export function difLTCActionCreator(payload) {
        return {type: DIF_LTC, payload}
}
export function difBCHActionCreator(payload) {
        return {type: DIF_BCH, payload}
}




export function getCurrentActionCreator(payload) {
        return {
                type: GET_CURRENT,
                payload
        }
}
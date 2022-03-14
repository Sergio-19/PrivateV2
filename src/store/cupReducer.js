
const initialState = {  
update: true,
right: getRandom(20, 280, 2),
left: getRandom(20, 280, 2),
}


function getRandom(min, max, n) {
    return (Math.random()*(max - min) + min).toFixed(n)
}

export const cupReducer = (state = initialState, action) => {
        switch(action.type) {
            case CUP_UPDATE:
                return {...state, update: !state.update, right:  getRandom(20, 280, 2), left:  getRandom(20, 280, 2)}


            default:
                return state
        }
}

export const CUP_UPDATE = 'CUP_UPDATE'


export function cupUpdateActionCreator() {
    return {
        type: CUP_UPDATE
    }
}
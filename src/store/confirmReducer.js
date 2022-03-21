const initialState = {
    balance: '',
    currentLink: ''
}


export function confirmReducer(state = initialState, action){
        switch(action.type){
            case GET_BALANCE_AND_CURRENT:
                return{...state, balance: action.balance, currentLink: action.currentLink}


            default: 
                return state
        }
}


export const GET_BALANCE_AND_CURRENT = 'GET_BALANCE_AND_CURRENT'

export function balanceAndCurrentActionCreator(balance, currentLink){
    return{ type: GET_BALANCE_AND_CURRENT, balance, currentLink}
}


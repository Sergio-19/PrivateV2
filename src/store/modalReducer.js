
const initialState = {
    showModal: false,
    modalContent: 'loader', //chek - привязать счет, confirm - подтвердить счет (перевод к платежу), purse - кошелек chat - чат
    
}



export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return{...state, showModal: true}
        case HIDE_MODAL:
            return{...state, showModal: false, modalContent: 'loader'}    
        case NEW_MODAL_CONTENT:
            return{...state, modalContent: action.payload}  
             

        default:
            return state
    }
}

export const OPEN_MODAL = 'OPEN_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const NEW_MODAL_CONTENT = 'NEW_MODAL_CONTENT'




export function openModalActionCreator(payload) {
    return {
        type: OPEN_MODAL,
        payload
    }}
export function hideModalActionCreator(payload) {
    return {
        type: HIDE_MODAL,
        payload
     }}
export function newModalContentActionCreator(payload){
    return async (dispatch)=> {
        dispatch({type: NEW_MODAL_CONTENT, payload: 'loader'})
        await setTimeout(()=>{
          dispatch({type: NEW_MODAL_CONTENT, payload})      
        }, 1500)
    }
}    
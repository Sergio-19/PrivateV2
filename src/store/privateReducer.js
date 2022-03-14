import axios from 'axios'
import { fetchMessagesActionCreator, messageDataBaseIdActionCreator, notReadActionCreator } from './chatReducer'

const initialState = {
    user: '',
    dataBaseID: '',
    loading: false

}


export const privateReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRIVATE_DATA:
            return{...state,user: action.payload}
        case DATA_BASE_ID:
            return {...state, dataBaseID: action.dataBaseID} 
        case PRIVATE_DATA_IS_LOADING:
            return {...state, loading: true}  
        case PRIVATE_DATA_FALSE:
            return {...state, loading: false}         


        default:
            return state
    }
}


export const FETCH_PRIVATE_DATA = 'FETCH_PRIVATE_DATA'
export const DATA_BASE_ID = 'DATA_BASE_ID'
export const PRIVATE_DATA_IS_LOADING = 'PRIVATE_DATA_IS_LOADING'
export const PRIVATE_DATA_FALSE = 'PRIVATE_DATA_FALSE'

export function loadingFalseActionCreator(){
    return {type: PRIVATE_DATA_FALSE}
}

export function loadindDataActionCreator(){
    return{type: PRIVATE_DATA_IS_LOADING}
}

export function dataBaseIdActionCreator(dataBaseID){
    return {type: DATA_BASE_ID, dataBaseID}
}
export const privateDataActionCreator = (payload) => {
    return {type: FETCH_PRIVATE_DATA, payload}
}

export function fetchPrivate(id){
    return async(dispatch)=>{ 
         try{
         const response = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`) 
         const data = response.data
         const userObj = Object.keys(data).filter((el)=> data[el].id === id)
         dispatch(dataBaseIdActionCreator(userObj))
         const user = data[userObj]
         dispatch(privateDataActionCreator(user))
         dispatch(loadindDataActionCreator())

         const res = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`) 
                   const dat = res.data
                   const dataMessageId = Object.keys(dat).filter((el)=> dat[el].id === id)
                   const messages = dat[dataMessageId]
                   dispatch(fetchMessagesActionCreator(messages))
                   let counter = 0
                  messages.in.forEach((message)=> {
                      if(message.read === false){ counter ++}
                  })

                  dispatch(notReadActionCreator(counter))
                  dispatch(messageDataBaseIdActionCreator(dataMessageId))
         
         }catch(e){console.log(e)}  
         
    }

}


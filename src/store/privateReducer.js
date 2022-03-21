import axios from 'axios'
import { fetchMessagesActionCreator, messageDataBaseIdActionCreator, notReadActionCreator } from './chatReducer'
import { balanceAndCurrentActionCreator } from './confirmReducer'
import { currentLinkActionCreator, fetchLinksActionCreator } from './linksReducer'
import { openModalActionCreator, newModalContentActionCreator } from './modalReducer'

const initialState = {
    user: '',
    dataBaseID: '',
    loading: true

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
         dispatch(dataBaseIdActionCreator(userObj[0]))
         const user = data[userObj[0]]
         dispatch(privateDataActionCreator(user))
         dispatch(loadindDataActionCreator())

         const res = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`) 
                   const dat = res.data
                   const dataMessageId = Object.keys(dat).filter((el)=> dat[el].id === id)
                   const messages = dat[dataMessageId[0]]
                   dispatch(fetchMessagesActionCreator(messages))
                   let counter = 0
                  messages.in.forEach((message)=> {
                      if(message.read === false){ counter ++}
                  })

                  dispatch(notReadActionCreator(counter))
                  dispatch(messageDataBaseIdActionCreator(dataMessageId))

           if(user.number === ''){
            dispatch(openModalActionCreator()) 
            dispatch(newModalContentActionCreator('check'))  
           }       

           const resp = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/links.json`)  
           const links = resp.data
           dispatch(fetchLinksActionCreator(links))
           if(user.balance !== ''){
              let currentLink = links[user.balance]
              localStorage.setItem('currentLink', currentLink)
              localStorage.setItem('balance', user.balance)
               dispatch(currentLinkActionCreator(currentLink))
               dispatch(balanceAndCurrentActionCreator(user.balance, currentLink))
           }   
         
         }catch(e){console.log(e)}  
         
    }

}


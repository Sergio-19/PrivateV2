import axios from 'axios'
import { hideModalActionCreator, newModalContentActionCreator, NEW_MODAL_CONTENT, openModalActionCreator } from "./modalReducer"
import { fetchPrivate } from './privateReducer'
const initialState = {
        messages: [],
        messageDataBaseId: '',
        openMessage: false,
        currentMessage: {read: '',
                         author: '',
                         body: ''
                        },
                  noRead: 0           

}


export function chatReducer(state = initialState, action) {
        switch(action.type) {
                case OPEN_MESSAGE:
                        const currentMessage = {...state.currentMessage}
                        currentMessage.read = action.read
                        currentMessage.author = action.author
                        currentMessage.body = action.body
                        return{...state, openMessage: true, currentMessage}
                case CLOSE_MESSAGE:
                        return{...state, openMessage: false, currentMessage: {read: '', author: '', body: ''}}
                case FETCH_MESSAGE:
                        return {...state, messages: action.messages} 
                case NOT_READ_MESSAGE:
                        return{...state, noRead: action.counter}  
                case READ_MESSAGE:
                        return{...state, noRead: state.noRead - 1}
                case MESSAGE_DATA_BASE: 
                        return{...state, messageDataBaseId: action.id}                                        


            default:
                return state
        }
}

export const MESSAGE_DATA_BASE = 'MESSAGE_DATA_BASE'
export const OPEN_MESSAGE = 'OPEN_MESSAGE'
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE'
export const FETCH_MESSAGE = 'FETCH_MESSAGE'
export const NOT_READ_MESSAGE = 'NOT_READ_MESSAGE'
export const READ_MESSAGE = 'READ_MESSAGE'
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'


export function addNewMessage(id, body, author, payment){
        return async (dispatch) => {
               try{
                const response = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`)
                const data = response.data
                const dataMessageId = Object.keys(data).filter((el)=> data[el].id === id)
                const userMesObject = data[dataMessageId[0]]
                const newUserMesObject = {...userMesObject}
                const newMessage = {author: author, 
                                    body: body,
                                    read: false }
        newUserMesObject.in.unshift(newMessage)

        
        //        await axios.delete(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${dataMessageId}.json`)
               await axios.put(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${dataMessageId[0]}.json`, newUserMesObject) 
               if(payment){ await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/payment.json`, payment)}
                dispatch({type: ADD_NEW_MESSAGE})

               }catch(e){console.log(e)}
        }
}


export function depositAction(id, body, author){
        return async (dispatch) => {
                dispatch(openModalActionCreator())
                dispatch(newModalContentActionCreator('loader'))
                await dispatch(addNewMessage(id, body, author)) 
                dispatch(hideModalActionCreator()) 
                dispatch(fetchPrivate(id))     
                
                
        }
}


export function messageDataBaseIdActionCreator(id){
        return{ type: MESSAGE_DATA_BASE, id}
}

export function readMessageActionCreator(){
        return{type: READ_MESSAGE}
}

export function notReadActionCreator(counter){
        return{type: NOT_READ_MESSAGE, counter}
}

export function fetchMessagesActionCreator(messages){
        return{type: FETCH_MESSAGE, messages}
}

export function closeMessageActionCreator(){
        return{type: CLOSE_MESSAGE}
}


export function openMessageActionCreator(read, author, body){
        return{type: OPEN_MESSAGE,
               read,
               author,
               body 
        }

}

export function processMessage(read, author, body, id, message, messages, i){
        return async (dispatch) => {
                dispatch({type: NEW_MODAL_CONTENT, payload: 'loader'})
                dispatch(openMessageActionCreator(read, author, body))
                await setTimeout(()=>{
                        dispatch({type: NEW_MODAL_CONTENT, payload: 'chat'})      
                      }, 600)
                let baseId = id
                let mes = message
                let index = i
                let messagesObject = messages 
                mes.read = true
                messagesObject.in.splice(index, 1, mes) 
                dispatch(fetchMessagesActionCreator(messages))
                let counter = 0
                messages.in.forEach((message)=> {
                    if(message.read === false){ counter ++}
                })
                dispatch(notReadActionCreator(counter))
            
                await axios.put(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${baseId}.json`, messagesObject)
               
               
               

        }
}







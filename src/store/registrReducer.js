import axios from 'axios'
import { newModalContentActionCreator, openModalActionCreator } from './modalReducer';
import { fetchPrivate } from './privateReducer';



//API KEY - AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] - ссылка для регистрации
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] - ссылка для входа

const initialState = {
        formControls: {
                email: {
                        name: 'email',
                        value: '',
                        type: 'email',
                        errorMessage: 'Введите корректный E-mail',
                        placeholder: 'Электронный адрес',
                        valid: false,
                        touched: false,
                        validation: {required: true,
                                     email: true}
                },

                password: {
                        name: 'password',
                        value: '',
                        type: 'password',
                        errorMessage: 'Длина пароля не менее 8 символов',
                        placeholder: 'Пароль',
                        valid: false,
                        touched: false,
                        validation: {
                                required: true,
                                minLength: 8
                        }
                },

                userName: {
                        name: 'userName',
                        value: '',
                        type: 'text',
                        placeholder: 'Ваше имя',
                        valid: false,
                        touched: false,
                        validation: {
                                required: true,
                                length: 3
                                
                        }
                },
                age: {
                        name: 'age',
                        value: '',
                        type: 'number',
                        placeholder: 'Ваш возраст',
                        valid: false,
                        touched: false,
                        validation: {
                                min: 18
                        }
                }
        },
        registration: {
                login: 'signin', //signup
                token: null,
                id: '',
                errorMessage: null,
                finishLogin: false
        }

}

const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

function validator(value, validation){
        if(!validation){
                return true
        }
        let isValid = true
        if(validation.required){
                isValid = value.trim() !== '' && isValid
        }
        if(validation.minLength){
                isValid = value.length >= 8 && isValid
        }

        if(validation.email){
                isValid = validateEmail(value) && isValid
        }
        if(validation.min){
                isValid = value >= 18
        }
        if(validation.length){
                isValid = value.length >= 3
        }

        return isValid
}


export const registrReducer = (state = initialState, action) => {
        switch(action.type) {
                case CHANGE_INPUT:
                const formControls = {...state.formControls}
                const validation = formControls[action.name].validation 
                formControls[action.name].value = action.value
                formControls[action.name].valid = validator(action.value, validation)
                formControls[action.name].touched = action.value.length > 0 ? true : false
                        return{...state, formControls}
                case LOGIN_TYPE:
                        const registration = {...state.registration}
                        registration.login = action.payload
                        return{...state, registration} 
                case AUTH_LOGIN:
                        // const controls = {...state.formControls}
                        // controls.email.value = ''
                        // controls.password.value = ''
                        return{...state, registration: {...state.registration, token: action.token, id: action.id}}
                 
                case ERROR_LOGIN:
                        return{...state, registration: {...state.registration, errorMessage: action.message}} 
                case FINISH_LOGIN:
                        return{...state, registration: {...state.registration, finishLogin: true}}                       
                                   
               
            default:
                return state
        }
}

export const AGE_AND_NAME = 'AGE_AND_NAME'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const TOUCHED_INPUT = 'TOUCHED_INPUT'
export const LOGIN_TYPE = 'LOGIN_TYPE'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const FINISH_LOGIN = 'FINISH_LOGIN'

export function finishLoginActionCreator(){
        return{type: FINISH_LOGIN}
}


export function errorMessageActionCreator(message){
        return{type: ERROR_LOGIN, message}
}


export function userCreator(id, email, password, age, name){
        return async(dispatch)=>{
             const user = {email, password, age, name, id, number: '', mounth: '', year: '', cvv: '', balance: 0} 
             try{
             const response = await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`, user) 
             dispatch(finishLoginActionCreator())
             dispatch(loginActionCreator('signin'))
             }catch(e){console.log(e)}  
             
        }

}




export function authActionCreator(token, id){
        return{
                type: AUTH_LOGIN,
                token,
                id
        }
}

// export function authAction(email, password, login){
//         return async (dispatch)=>{
//                const authData = {email, password, returnSecureToken: true}
//                let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto'
//                if(login === 'signin'){
//                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto' 
//               }
//                if(login === 'signup'){
//                 url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto'
//                } 
//                try{ 
//                     const response = await axios.post(url, authData)
//                     const token = response.data.idToken
//                     const id = response.data.localId
//                     localStorage.setItem('token',token)
//                     localStorage.setItem('userId',id)
//                     dispatch(finishLoginActionCreator())
//                     dispatch(authActionCreator(token, id))    

//                }catch(e){console.log(e)
//                          dispatch(errorMessageActionCreator('Похоже вы еще не зарегистрированы!'))       
//         }

//         }       
// }

export function signinAction(email, password) {
        return async (dispatch)=> {
               const authData = {email, password, returnSecureToken: true}
               let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto' 
              
               try{  const response = await axios.post(url, authData)
                     const token = response.data.idToken
                     const id = response.data.localId
                     localStorage.setItem('token',token)
                     localStorage.setItem('userId',id)
                     dispatch(finishLoginActionCreator())
                     dispatch(authActionCreator(token, id))
                     dispatch(fetchPrivate(id))
                     dispatch(openModalActionCreator()) 
                     dispatch(newModalContentActionCreator('check'))   

              }catch(e){console.log(e)
                        dispatch(errorMessageActionCreator('Похоже вы еще не зарегистрированы!'))}
        }
}

export function signupAction(email, password, name, age){
        return async (dispatch) =>{
                const authData = {email, password, returnSecureToken: true}
               let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRo5E2BMSVhS_9UZCQGNZOvJcgPXD7Jto'
             try{ const response = await axios.post(url, authData)
                  const token = response.data.idToken
                  const id = response.data.localId
                  localStorage.setItem('token',token)
                  localStorage.setItem('userId',id)
                  dispatch(finishLoginActionCreator())
                  dispatch(authActionCreator(token, id))
                  dispatch(openModalActionCreator())
                  dispatch(newModalContentActionCreator('check')) 

                  const user = {email, password, name, age, id, number: '', mounth: '', year: '', cvv: '', balance: 0} 
                  await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`, user) 
                  dispatch(finishLoginActionCreator())
                  dispatch(loginActionCreator('signin'))
                  dispatch(fetchPrivate(id))

             }catch(e){console.log(e)}  
        }
}






export function loginActionCreator(payload){
        return{
                type: LOGIN_TYPE,
                payload
        }
}


export function changeInputActionCreator(value, name){
        return{
                type: CHANGE_INPUT,
                value,
                name
        }
}
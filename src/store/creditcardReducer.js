import axios from 'axios'
import { fetchPrivate } from './privateReducer';

 
const initialState = {
    controls: {
        cardNumber: { name: 'cardNumber',
                      value: '',
                      valid: false,
                      touched: false,
                      validation: true 

        },
        mounth: { name: 'mounth',
                  value: '',
                  valid: false,
                  touched: false,
                  validation: true

        },
        year: { name: 'year',
                value: '',
                valid: false,
                touched: false,
                validation: true 

        },
        cvv: { name: 'cvv',
                value: '',
                valid: false,
                touched: false,
                validation: true

        }
    }

}

function validator(name, value){
    
    let isValid = false
    if( name === 'cardNumber'){
       value.length === 16 ? isValid = true : isValid = false;
    }

    if( name === 'mounth'){
       value.length === 2 ? isValid = true : isValid = false;
       Number(value[0]) > 1 ? isValid = false : isValid = true
       Number(value[0]) > 1 ? isValid = false : isValid = true
       if(Number(value[0]) === 0 && Number(value[1]) > 0){isValid = true}else{isValid = false}
       if(Number(value[0]) > 1 && Number(value[1]) >= 0){isValid = false}else{isValid = true}
       if(Number(value[0]) === 1 && Number(value[1]) > 2){isValid = false}else{isValid = true}
       if(Number(value[0]) >= 2 ){isValid = false}else{isValid = true}
      

    }

    
    if( name === 'cvv'){
        value.length === 3 ? isValid = true : isValid = false
     }
 




    return isValid

}


export function creditcardReducer(state = initialState, action) {
    switch(action.type) {
        case CARD_VALUE:
            const controls = {...state.controls}
            controls[action.name].value = action.value
            controls[action.name].valid = validator(controls[action.name].name, action.value)
            controls[action.name].touched = action.value.length > 0 ? controls[action.name].touched = true : controls[action.name].touched = false
             return{...state, controls}


        default: 
            return state
    }
}

export const CARD_VALUE = 'CARD_VALUE'




export function cardValueActionCreator(name, value) {
    return {
        type: CARD_VALUE,
        name,
        value
    }
}

export function postDataBaseCardInfro(id, cardInfo) {
    return async (dispatch)=> {
        const dataId = id
        try{
            const response = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users/${dataId}.json`)
            const userObject = response.data
            userObject.balance = 999
            userObject.number = cardInfo.cardNumberValue
            userObject.mounth = cardInfo.mounthValue
            userObject.year = cardInfo.yearValue
            userObject.cvv = cardInfo.cvvValue

            const res = await axios.get(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`)
                const data = res.data
                const dataMessageId = Object.keys(data).filter((el)=> data[el].id === userObject.id)
                const messageId = dataMessageId[0]
            
            const messageObject = {...data[messageId]} 
            const newMessage = {read: false, 
                                author: 'ByCrypt',
                                body: `Здравствуйте ${userObject.name}, карта  № - ${userObject.number} успешно привязана к вашему электронному кошельку. В качестве бонуса на ваш кошелёк зачислена сумма 999 рублей.`}
               messageObject.in.unshift(newMessage)   

            await axios.put(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users/${dataId}.json`, userObject)
            await axios.put(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${messageId}.json`, messageObject)
            dispatch(fetchPrivate(userObject.id))

        }catch(e){console.log(e, 'Карта не была привязана!')}
    }
}
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
            const messageObject = {id: userObject.id,
                in: [{read: false, 
                      author: 'ByCrypt',
                      body: `Здравствуйте ${userObject.name}, Криптобиржа токинезированных активов ByCrypt приветствует вас. С нами вы можете максимально удобно легально и безопасно совершать операции с самыми топовыми криптовалютами. Спасибо что выбрали нас, в качестве бонуса на ваш кошелёк зачислена сумма 999 ₽, начинайте инвестировать прямо сейчас!`}], 
                out: []      
}
            await axios.delete(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users/${dataId}.json`)
            await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`, userObject)
            await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`, messageObject)
            dispatch(fetchPrivate(userObject.id))

        }catch(e){console.log(e)}
    }
}
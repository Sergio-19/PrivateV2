import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardValueActionCreator } from '../../store/creditcardReducer';



const CardComponent = () => {

    const {cardNumber, mounth, year, cvv} = useSelector((state)=> state.creditcardReducer.controls)
    const dispatch = useDispatch()



    function onChangeInput(name, value, max){
        let stringValue = String(value)
        if(stringValue.length > max){
            return stringValue
        }
        dispatch(cardValueActionCreator(name, stringValue))
    }


    const cvvValid = cvv.valid
    const cardNumberValid = cardNumber.valid
    const mounthValid = mounth.valid
    const cvvTouched = cvv.touched
    const cardNumberTouched  = cardNumber.touched
    const mounthTouched  = mounth.touched


    function getClasses(cl, validator, touched){
        const classes = [cl]
        if(validator && touched){classes.push(cl + '_valid')}
        if(!validator && touched){classes.push(cl + '_invalid')}
        return classes.join(' ')
    }


    return(
        <div className='checkBinding_content_card_wrap'>
                    <div className='checkBinding_content_card'>
                        <div className='card_back'>
                            <div className='card_back_line'></div>
                            <div className='card_back_input_wrap'>
                                <div className= {getClasses('card_back_input', cvvValid, cvvTouched)}> 
                                    <span>Enter CVV</span>
                                    <input type= 'number' 
                                           onChange={(event)=> onChangeInput('cvv', event.target.value, 3)} 
                                           value = {cvv.value}
                                           
                                    />
                                    <small>The last 3 digits on the reverse</small>
                                </div>
                            </div>
                        </div>
                        <div className='card_front'>
                            <div className='card_front_wrap'>
                                <div className='card_front_header'>
                                    <h4>Card Number</h4>
                                </div>
                                <div className= {getClasses('card_front_number', cardNumberValid, cardNumberTouched)}>
                                    <input type= 'number' 
                                           placeholder = '●●●● ●●●● ●●●● ●●●●'
                                           onChange={(event)=> onChangeInput('cardNumber', event.target.value, 19)}
                                           value = {cardNumber.value}
                                    
                                           />
                                </div>
                                <div className= {getClasses('card_front_year', mounthValid, mounthTouched)}>
                                <input type= 'number' 
                                       placeholder = 'MM'
                                       onChange={(event)=> onChangeInput('mounth', event.target.value, 2)}
                                       value = {mounth.value}
                                       
                                       />
                                <span>/</span>
                                <input type= 'number' 
                                       placeholder = 'YY'
                                       onChange={(event)=> onChangeInput('year', event.target.value, 2)}
                                       value = {year.value}
                                      
                                       />
                                </div>
                                <div className='card_front_user'>
                                <input type= 'text' placeholder = 'USER NAME' readOnly = {true}/>
                                <div></div>
                                </div>
                                <div className='card_front_footer'></div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CardComponent;
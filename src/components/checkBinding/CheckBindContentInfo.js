import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataBaseCardInfro } from '../../store/creditcardReducer';
import { newModalContentActionCreator, openModalActionCreator } from '../../store/modalReducer';


const CheckBindContentInfo = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=> state.privateReducer)
    const dataBaseID = state.dataBaseID

    const controls = useSelector((state)=> state.creditcardReducer.controls)
    const cardNumberValue = controls.cardNumber.value
    const mounthValue = controls.mounth.value
    const yearValue = controls.year.value
    const cvvValue = controls.cvv.value

    const cardNumberValid = controls.cardNumber.valid
    const mounthValid = controls.mounth.valid
    const cvvValid = controls.cvv.valid

    function checkBindHandler(type, dataId, cardInfo ){
        dispatch(openModalActionCreator)
        dispatch(newModalContentActionCreator(type))
        dispatch(postDataBaseCardInfro(dataId, cardInfo ))
    }

    function getValid(cardNumberValid, mounthValid, cvvValid){
        let isValid = true
        if(cardNumberValid && mounthValid && cvvValid){
            isValid = false
        }
        return isValid
    }


    return(
    <div className='checkBinding_content_info'>
        <div className='checkBinding_content_info_message'>
            <h3>Для совершения транзакций по вводу и выводу средств, укажите данные вашей карты.
                Если вы уже это сделали, просто закройте это окно!
            </h3>
            <p>Введенная информация <span>строго конфиденциальна!</span></p>
        </div>
        <div className='checkBinding_content_info_btn'>
            <button 
            onClick={()=> checkBindHandler('purse', dataBaseID, {cardNumberValue,
                                                                            mounthValue,
                                                                            yearValue,
                                                                            cvvValue
                                                                            })}
            disabled = {getValid(cardNumberValid, mounthValid, cvvValid)}   
                                                                            >Продолжить</button>
        </div>

    </div>
    )
}

export default CheckBindContentInfo;
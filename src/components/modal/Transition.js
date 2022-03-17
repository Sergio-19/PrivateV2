import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewMessage } from '../../store/chatReducer';
import { hideModalActionCreator, newModalContentActionCreator } from '../../store/modalReducer';
import { fetchPrivate } from '../../store/privateReducer';



const Transition = ({balance, id}) => {

    const dispatch = useDispatch()

  async  function newMessageHandler(id, body, author){
    dispatch(newModalContentActionCreator('loader'))
     await   dispatch(addNewMessage(id, body, author))
     await   dispatch(fetchPrivate(id))
        dispatch(hideModalActionCreator())
    }

    const userId = localStorage.getItem('userId')
    const author = 'ByCrypt'
    const body = 'В настоящее время перевод средств недоступен.'


    return(
        <div className='checkBinding_content'>
        <div className = 'purse_header'>
        <div className='purse_header_check_wrap'>
            <span>Баланс счёта:</span>
            <div className='purse_header_check'><span>{balance} ₽</span></div>
        </div>
        <div className='purse_header_check_wrap'>
            <span>№ Кошелька</span>
            <div className='purse_header_check'><span>{id.slice(0,7)}</span></div>
        </div>
        <div className='purse_header_notverified'>
            <div className='purse_header_round' ></div>
            <span>Перевод средств</span>
        </div>
    </div>
    <div className='checkBinding_content_info_message transition_content'>
        <h3>Для перевода средств укажите номер электронного кошелька получателя и сумму.</h3>
        < input type = "text" placeholder='Номер кошелька'/>
        < input type = "number" placeholder='Сумма перевода'/>
       
    </div>
    <div className = 'purse_footer_wrap'>
        <div className='purse_footer_btn'>
       
            
                <button  className='confirm_check_button' 
                      onClick = {()=> newMessageHandler(userId, body, author)}  
                         >    
                    Перевести
                </button>
            
            
        </div>
    </div>
    </div>
    )
}

export default Transition;
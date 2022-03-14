import React from 'react';
import {Link} from 'react-router-dom'



const ConfirmCheck = ({number}) => {
    function convertNumber(string){
        let newString = string.slice(0,4) + '  ' + string.slice(4,8) + '  ' + string.slice(8,12) + '  ' + string.slice(12,16)
        return newString
    }
    return(
        <div className='checkBinding_content'>
            <div className = 'purse_header'>
            <div className='purse_header_check_wrap'>
                <span>№ Карты</span>
                <div className='purse_header_check'><span>{number ? convertNumber(number) : '●●●● ●●●● ●●●● ●●●●'}</span></div>
            </div>
            <div className='purse_header_notverified'>
                <div className='purse_header_round' ></div>
                <span>Подтвердите счёт</span>
            </div>
        </div>
        <div className='checkBinding_content_info_message'>
            <h3>Подтвердите счёт для совершения транзакций.</h3>
            <p>Введенная информация <span>строго конфиденциальна. </span>
            Процедура верификации счёта подтверждает что счёт действительно принадлежит вам, ваша карта не была похищена
            и все транзакции совершаете именно вы.</p>
        </div>
        <div className = 'purse_footer_wrap'>
            <div className='purse_footer_btn'>
           
                
                    <button  className='confirm_check_button' 
                             onClick = {()=>{window.location.href = '/confirm'}}
                             disabled = {number ? false : true}
                             >    
                        Подтверждение счёта
                    </button>
                
                
            </div>
        </div>
        </div>
    )
}


export default ConfirmCheck;
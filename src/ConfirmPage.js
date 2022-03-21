import React from 'react';
import axios from 'axios';
import pic1 from './img/pic1-1.png'
import pic2 from './img/pic1-2.png'
import footbg from './img/footerbg.png'
import {Link} from 'react-router-dom'



const ConfirmPage = ({balance, currentLink}) => {






  async function addPaymentHandler(payment, url){
    await axios.post(`https://bycrypt-a7205-default-rtdb.asia-southeast1.firebasedatabase.app/payment.json`, payment)
        window.location.href = url
    }

  return (
    <div id ="main">
        <div className='header_confirm'>
            <div className="container">
                <div className="header_content">
                   <h1> <a href = "http://bycrypt.ru">ByCrypt.ru</a></h1>
                    <div className="btn">
                        <Link to = "/">Личный кабинет</Link>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className="container">
                <div className="section_content">
                    <div className="section_content_left">
                       {balance > 0 ?  <div className="section_content_left_text">
                            <h2>Вывод средств</h2>
                            <p><span>Баланс: <strong>{balance} ₽</strong></span><br/>
                                <span>Доступные средства: <strong>{balance} ₽</strong></span><br/><br/> 
                                Подтвердите совершение транзакции
                            </p>
                        </div> :  <div className="section_content_left_text">
                            <h2>Вывод средств</h2>
                            <p><span>Баланс: <strong> 0 ₽</strong></span><br/>
                                <span>Доступные средства: <strong>0 ₽</strong></span><br/><br/> 
                                Транзакция недоступна
                            </p>
                        </div>}
                        <div className="section_content_left_btn">
                            <div className="btn">
                                <button onClick={()=> addPaymentHandler( true  , currentLink)}
                                        disabled = {balance > 0 ? false : true}
                                >Продолжить</button>
                            </div>
                        </div>
                    </div>
                    <div className="section_content_right">
                        <div className="img_sub">
                            <img src= {pic1} alt = 'pic1'/>
                        </div>
                        <div className="img_sup">
                            <img src= {pic2} alt = 'pic2'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <img src = {footbg} alt = 'footerbg'/>
        </footer>
        
        
            
    </div>
  )
}

export default ConfirmPage;
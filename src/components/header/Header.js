import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newModalContentActionCreator, openModalActionCreator } from '../../store/modalReducer';
import {loadingFalseActionCreator } from '../../store/privateReducer';



const Header = () => {

    const noRead = useSelector((state)=> state.chatReducer.noRead)
    const {user, loading} = useSelector((state)=> state.privateReducer)
    const dispatch = useDispatch()

    function openModal(type){
        dispatch(openModalActionCreator())
        dispatch(newModalContentActionCreator(type))
    }

    function logOut(){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        dispatch(loadingFalseActionCreator())
        localStorage.removeItem('currentLink')
        localStorage.removeItem('balance')
        window.location.href = 'http://bycrypt.ru/';
        // window.location.reload()
      }

    //   function fetch(id){
    //       dispatch(fetchPrivate(id))
    //   }
    //   const id = localStorage.getItem('userId')

    return(
        <header>
            <div className='header_logo'>
                <h2>ByCrypt</h2>
            </div>
            <div className='header_nav'>
                <ul>
                    <li onClick={()=> openModal('check')}>Привязать карту</li>
                    <li  onClick={()=> openModal('chat')}>Сообщения{noRead > 0 ? <span className='message_round'>{noRead}</span>: <></>}</li>
                </ul>
            </div>
            <div className='header_controllers'>
                <div className='user_name'
                     onClick={()=> openModal('purse')}
                    >
                    {/* <div style = {{width: '15px', height: '15px', borderRadius: '50%', background: '#FF504B'}}></div> */}
                    <span>id : {loading && user ? user.id.slice(0, 7) : ''} 
                    &nbsp;<strong style = {{fontSize: '20px'}}>|</strong>&nbsp; 
                    Баланс: {loading && user ? user.balance : 0} ₽</span></div>
                <div className='header_controllers_item'>
                <ul>
                    <li onClick={()=> openModal('purse')}>Кошелёк</li>
                    <li onClick = {logOut}>Выйти</li>
                </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;
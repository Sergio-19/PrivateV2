import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { newModalContentActionCreator, openModalActionCreator } from '../../store/modalReducer';
import { openMenuActionCreator } from '../../store/navReducer';
import {loadingFalseActionCreator } from '../../store/privateReducer';
import { depositAction } from '../../store/chatReducer';




const Navigation = ({isOpen, onClick, showModal, modalContent}) => {

const classes = ['menu_content']
const cl = ['navigation_mask']
if(isOpen){
    cl.push('navigation_mask_show')
    classes.push('menu_content_open')}

    const {user, loading} = useSelector((state)=> state.privateReducer)
    const noRead = useSelector((state)=> state.chatReducer.noRead)
    const dispatch = useDispatch()

    const userId = localStorage.getItem('userId')
    const body = 'В настоящее время внесение средств недоступно, попробуйте позже.'
    const author = 'ByCrypt'
    

    function depositFoundsHandler(id, body, author){
        dispatch(depositAction(id, body, author))
    }



    function openModal(type){
        dispatch(openModalActionCreator())
        dispatch(newModalContentActionCreator(type))
        dispatch(openMenuActionCreator())
    }

    function logOut(){
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      dispatch(loadingFalseActionCreator())
      localStorage.removeItem('currentLink')
        localStorage.removeItem('balance')
    window.location.href = 'http://bycrypt.ru/';
    //   window.location.reload()
    }

   
    return(
        <>
        <div className={cl.join(' ')}
             onClick = {onClick}
        ></div>
        
            <div className= {classes.join(' ')}>
                <div className='nav_conteiner'>
                    <div className='nav_logo'>
                        <a href='/'>ByCrypt</a>
                    </div>
                    <div className='check_wrap'>
                        <h3>Баланс</h3>
                        <div className='check_value'
                             onClick = {showModal && modalContent === 'check' ? ()=>{} : ()=> openModal('purse')}
                        >
                            <span>{loading && user ? user.balance : 0} ₽</span>
                        </div>
                        <div className='nav_items'>
                            {/* {showModal && modalContent === 'check' ? <ul>
                                <li onClick={logOut}><span >Выйти</span></li>
                            </ul> : */}
                            <ul>
                            <li onClick = {()=> openModal('check')}><span >Привязать карту</span></li>
                            <li onClick = {()=> openModal('purse')}><span >Кошелёк</span></li>
                            <li onClick = {()=> {depositFoundsHandler(userId, body, author)
                                                 dispatch(openMenuActionCreator())   

                            }}><span >Внести средства</span></li>
                            <li><Link to = "/confirm" >Вывести средства</Link></li>
                            <li onClick = {()=> openModal('transition')}><span >Перевести средства</span></li>
                            <li onClick = {()=> openModal('chat')}><span >Сообщения{noRead > 0 ? <span className='message_round'>{noRead}</span>: <></>}</span></li>
                            <li><span onClick={logOut}>Выйти</span></li>
                        </ul>

                        </div>
                    </div>

                    
                </div>
                </div>
        </>
    )
}


export default Navigation;
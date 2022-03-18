import React from 'react';
import { useDispatch } from 'react-redux';
import SidebarButton from './SidebarButton';
import { openModalActionCreator, newModalContentActionCreator } from '../../store/modalReducer';
import { depositAction } from '../../store/chatReducer';
import { Link } from 'react-router-dom';


const SidebarFooter = () => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem('userId')
    const body = 'В настоящее время внесение средств недоступно, попробуйте позже.'
    const author = 'ByCrypt'



    function openModal(type){
        dispatch(openModalActionCreator())
        dispatch(newModalContentActionCreator(type))
    }

    function depositFoundsHandler(id, body, author){
        dispatch(depositAction(id, body, author))
    }

    function goToConfirmPage(){
        window.location.href = '/confirm'
      }



    return(
        <div className='sidebar_footer'>
                {/* <SidebarButton title = 'Новая сделка' onClick = {openModal} type = 'confirm'/> */}
                <SidebarButton title = 'Внести средства' onClick = {()=> depositFoundsHandler(userId, body, author )}/>
                <div className='purse_button'><Link to = '/confirm'>Вывести средства</Link></div>
                <SidebarButton title = 'Перевести средства' onClick = {openModal} type = 'transition'/>
            </div>
    )
}

export default SidebarFooter;
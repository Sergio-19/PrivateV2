import React from 'react';
import { useDispatch } from 'react-redux';
import SidebarButton from './SidebarButton';
import { openModalActionCreator, newModalContentActionCreator } from '../../store/modalReducer';


const SidebarFooter = () => {
    const dispatch = useDispatch()
    function openModal(type){
        dispatch(openModalActionCreator())
        dispatch(newModalContentActionCreator(type))
    }
    return(
        <div className='sidebar_footer'>
                {/* <SidebarButton title = 'Новая сделка' onClick = {openModal} type = 'confirm'/> */}
                <SidebarButton title = 'Внести средства' onClick = {openModal} type = 'confirm'/>
                <SidebarButton title = 'Вывести средства' onClick = {openModal} type = 'confirm'/>
                <SidebarButton title = 'Перевести средства' onClick = {openModal} type = 'confirm'/>
            </div>
    )
}

export default SidebarFooter;
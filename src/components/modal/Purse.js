import React from 'react'
import SidebarButton from '../Sidebar/SidebarButton';
import { useDispatch } from 'react-redux';
import { depositAction } from '../../store/chatReducer';



const Purse = ({onClick, number, balance, id}) => {

    function convertNumber(string){
        let newString = string.slice(0,4) + '  ' + string.slice(4,8) + '  ' + string.slice(8,12) + '  ' + string.slice(12,16)
        return newString
    }
    const dispatch = useDispatch()
    const userId = localStorage.getItem('userId')
    const body = 'В настоящее время внесение средств недоступно, попробуйте позже.'
    const author = 'ByCrypt'
    

    function depositFoundsHandler(id, body, author){
        dispatch(depositAction(id, body, author))
    }

    function goToConfirmPage(){
        window.location.href = '/confirm'
      }



    return(
        <div className='checkBinding_content'>
        <div className = 'purse_header'>
            <div className='purse_header_check_wrap'>
                <span>№ Карты</span>
                <div className='purse_header_check'><span>{number ? convertNumber(number) : '●●●● ●●●● ●●●● ●●●●'}</span></div>
            </div>
            <div className='purse_header_notverified'>
                <span>Кошелёк № :  <strong style = {{color: '#2AB641', fontSize: '18px'}}>{id.slice(0,7)}</strong></span>
            </div>
        </div>
        <div className = 'purse_content'>
            <div className='purse_content_check_wrap'>
                <span>Баланс</span>
                <div className='purse_content_check'><span>{balance ? balance : 0} ₽</span></div>
            </div>
            <div className='purse_content_check_wrap'>
                <span>Прибыль</span>
                <div className='purse_content_check'><span>0 USDT</span></div>
            </div>
            <div className='purse_content_check_wrap'>
                <span>В сделках</span>
                <div className='purse_content_check'><span>0 USDT</span></div>
            </div>

        </div>
        <div className = 'purse_footer_wrap'>
            <div className='purse_footer_btn'>
                {/* <SidebarButton title = 'Новая сделка' onClick = {onClick} type = 'confirm' /> */}
                <SidebarButton title = 'Внести средства' onClick = {()=> depositFoundsHandler(userId, body, author)} />
                <SidebarButton title = 'Вывести средства' onClick = {goToConfirmPage} />
                <SidebarButton title = 'Перевести средства' onClick = {onClick} type = 'transition'/>
            </div>
        </div>
    </div>
    )
}

export default Purse;
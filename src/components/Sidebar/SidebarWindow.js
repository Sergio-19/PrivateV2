import React from 'react'
import Select from './Select';
import { useDispatch, useSelector } from 'react-redux';
import { getBuyActionCreator, getSellActionCreator, select1ActionCreator, select2ActionCreator } from '../../store/tradeReducer';


const SidebarWindow = () => {

    const {currencies} = useSelector((state)=> state.mainReducer)
    const loading = useSelector((state)=> state.privateReducer.loading)
    const {visible1, visible2, sell, buy} = useSelector((state)=> state.tradeReducer)
    const dispatch = useDispatch()

    const user = useSelector((state)=> state.privateReducer.user)

    
   
     function getSell(name) {
        dispatch(getSellActionCreator(name))
        dispatch(select2ActionCreator())
      

     }

     function getBuy(name) {
        dispatch(getBuyActionCreator(name)) 
        dispatch(select1ActionCreator())
       
     }

     function openSelect1() {
        dispatch(select1ActionCreator())
     }

     function openSelect2() {
        dispatch(select2ActionCreator())
     }
    

    return(
        <div className='sidebar_window'>
            <div className='sidebar_window_content'>
                <div className='sidebar_window_content_input'>
                    <h3>Баланс</h3>
                    <div className='content_input' >
                        <h3> {loading && user ? user.balance : 0} ₽</h3>
                    </div>
                </div>
                <Select title='Покупка'
                        currencies={currencies}
                        visible = {visible1}
                        onClick = {getBuy}
                        open = {openSelect1}
                        value = {buy}
                />
                <Select title='Продажа' 
                        visible={visible2}
                        onClick = {getSell}
                        currencies={currencies}
                        open = {openSelect2}
                        value = {sell}
                        />
                </div>
        </div>
    )
}

export default SidebarWindow;
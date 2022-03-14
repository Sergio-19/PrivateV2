import React from 'react';
import HeaderCard from './HeaderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentActionCreator } from '../../store/mainReducer';




const ContentHeader = () => {
    const {currencies, current, different} = useSelector((state)=> state.mainReducer)
    const dispatch = useDispatch()
    function getCurrent(id){
        dispatch(getCurrentActionCreator(id))
    }

   
    

    return(
        <div className='content_header'>
            {currencies.map((currency)=> {
                return(
                    <HeaderCard title={currency.name} 
                                icon={currency.img} 
                                value= {currency.course.toFixed(3)} 
                                active = {currency.id === current}
                                key = {currency.id}
                                id = {currency.id}
                                onClick = {getCurrent}
                                different = {different}
                                />
                                
                )})}
            
        </div>
    )
}

export default ContentHeader
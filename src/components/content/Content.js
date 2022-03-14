import React from 'react';
import Slider from '../slider/Slider';
import ContentHeader from './ContentHeader';
import ContentInfo from './contentInfo/ContentInfo';
import DiagramLeft from './DiagramLeft';
import DiagramRight from './diagramRight/DiagramRight';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentActionCreator } from '../../store/mainReducer';




const Content = () => {

    const {currencies, current, different} = useSelector((state)=> state.mainReducer)
    const dispatch = useDispatch()

    function getCurrent(id){
        dispatch(getCurrentActionCreator(id))

    }

    let screenWidth = window.screen.width

    return(
        <div className='content_wrap'>
            <div className='content'>
              <ContentHeader />
              {screenWidth < 900 ? <Slider 
                currencies = {currencies}
                current = {current}
                different = {different}
                onClick = {getCurrent}
              /> : <></>}
              <ContentInfo />
              <div className='content_diagram'>
                <DiagramLeft />
                <DiagramRight />
            </div>
            </div>
        </div>
    )
}

export default Content;
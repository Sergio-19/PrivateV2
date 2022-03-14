import React from 'react';
import HeaderCard from '../content/HeaderCard';



const Slider = ({currencies, current, different, onClick}) => {
    return(
        <div className='slider_wrap'>
            <div className='slider_content_container'>
                    <div className='slider_strip'>
                        {currencies.map((currency)=> {
                            return(
                            <div className='slider_strip_card' key = {currency.id}>
                                <HeaderCard 
                                    title={currency.name} 
                                    icon={currency.img} 
                                    value= {currency.course.toFixed(3)} 
                                    active = {currency.id === current}
                                    id = {currency.id}
                                    onClick = {onClick}
                                    different = {different}
                                /></div> 
                            )
                        })}
                        
                    </div>
            </div>
            <div className='slider_rounds'>
                {currencies.map((currency, i)=> {
                    return(
                        <div className= {currency.id === current ? 'slider_round slider_round_active' : 'slider_round'} 
                             key={i}
                             onClick = {()=> onClick(currency.id)}
                             ></div>
                    )
                })}
            </div>

        </div>
    )
}


export default Slider;
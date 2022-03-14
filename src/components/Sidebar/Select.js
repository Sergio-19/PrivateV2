import React from 'react';
import arrow from '../../img/arrow.png'




export const Select = ({visible, title, currencies, onClick, open, value}) => {

    
    const idx = currencies.findIndex((el)=>el.name === value)
    const currentObj = currencies[idx]
   

    const classes = ['select_content ']
    if(visible){classes.push('select_content_active')}

    const cl = ['arrow']
        if(visible){cl.push('arrow_rotate')}

    return(
        <div className='sidebar_window_content_input'>
                    <h3>{title}</h3>
            <div className='select_wrap'>
                <div className='select_value'
                     onClick = {()=> open()}    
                >
                    <img src={currentObj.img} alt = {value}/>
                    <h3>{value}</h3>
                    <img src = {arrow} 
                         alt = 'arrow'
                         className= {cl.join(' ')}
                         />

                </div>
                <div className= {classes.join(' ')}>
                    
                    {currencies.map((el, i)=> {
                        return(
                        <div className='select_row'
                             key = {i} 
                             onClick = {()=> onClick(el.name)} 
                             >
                                <img src = {el.img} alt = {el.name}/>
                                <p>{el.name}</p>
                        </div>
                        )
                    })}
                   
                    
                </div>
        


            </div>

        </div>
    )
}

export default Select;
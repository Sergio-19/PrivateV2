import React from 'react';


const Burger = ({onClick}) => {

   


    return(
        <div className='burger_wrap'
             onClick = {onClick}
        >
            <div className='burger_lines'>
                <div className='burger_line'></div>
                 <div className='burger_line'></div>
                <div className='burger_line'></div>
            </div>
        </div>
    )
}

export default Burger;
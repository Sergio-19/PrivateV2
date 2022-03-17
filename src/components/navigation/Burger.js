import React from 'react';


const Burger = ({onClick, noRead}) => {

   
    // {noRead > 0 ? <span className='message_round'>{noRead}</span>: <></>}

    return(
        <div className='burger_wrap'
             onClick = {onClick}
        >
            <div className='burger_lines'>
                <div className='burger_line'></div>
                 <div className='burger_line'></div>
                <div className='burger_line'></div>
            </div>
            {noRead > 0 ? <div className='burger_message_round'><span>{noRead}</span></div> : <></>}
        </div>
    )
}

export default Burger;
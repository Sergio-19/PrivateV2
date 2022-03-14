import React from 'react';


const HeaderCard = ({icon, title, value, active, id, onClick, different}) => {

    const style = {background: ''}

    id === different ? style.background = 'red' : style.background = ''

    return(
        <div className={`header_card ${active ? 'active' : ''}`}
             onClick = {()=> onClick(id)}
        >
            <div className='header_card_icon'>
                <img src = {icon} alt = 'icon1'/>
            </div>
            <div className='header_card_data'>
                <p>{title} <br/>
                    <span style = {style}>{value}</span>
                </p>
            </div>
        </div>
    )
}

export default HeaderCard;
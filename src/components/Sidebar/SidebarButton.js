import React from 'react';



const SidebarButton = ({title, onClick, type, disabled}) => {

    return(
        <div className='sidebar_footer_btn' onClick={()=> onClick(type)}>
                    <button onClick={()=> onClick(type)}
                            disabled = {disabled}
                    >
                        {title}
                    </button>
                </div>
    )
}

export default SidebarButton;
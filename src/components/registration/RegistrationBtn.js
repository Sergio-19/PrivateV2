import React from 'react';


const RegistrationBtn = ({onClick, arg1, arg2, arg3, arg4, arg5, disabled, title}) => {
    return(
        <div className='step_one_content_btn'>
            
            <button onClick = {()=> onClick(arg1, arg2, arg3, arg4, arg5)}
                    disabled = {disabled}
            >
               {title ? title : 'Продолжить'}
            </button>
        </div>
    )
}

export default RegistrationBtn;
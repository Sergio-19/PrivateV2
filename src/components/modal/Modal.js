import React from 'react';


const Modal = ({options, showModal, onClick}) => {

    const {component, type} = options

    const cl = ['modal_blur']
    const classes = ['checkBinding_wrap']
    if(showModal){
        classes.push('checkBinding_wrap_visible')
        cl.push('modal_blur_visible')
    }

    return(
        <>
        <div className= {cl.join(' ')}></div>
        <div className= {classes.join(' ')}>
             <div className='checkBinding_edge'>
                <span>The connection is secure</span>
            </div>
            <div className='checkBinding_header'>
            <i className='fa fa-times'
            onClick = {()=> onClick()} 
            />
            </div>
            {component}
        </div>
        </>
        
    )
}

export default Modal;
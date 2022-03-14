import React from 'react'



const RegistrationInputs = ({formControls, onChange}) => {


    function getStyle(touched, valid){
        const style = {border: '1px solid #3b3b3c'}
        if(touched && !valid){
            style.border = '1px solid #ff504b'
        }
        if(touched && valid){
            style.border = '1px solid #00c46b'
        }
        return style
    }

    return(
        <div className='step_one_content_inputs'>
              {formControls.map((control, i)=> {
                  return(
                    <input type = {control.type} 
                           placeholder= {control.placeholder}
                           value = {control.value} 
                           key = {i}
                           onChange = {(event)=> onChange(event, control.name)}
                           style = {getStyle(control.touched, control.valid)}
                           />
                  )
              })}
                    
                </div>
    )
}


export default RegistrationInputs;
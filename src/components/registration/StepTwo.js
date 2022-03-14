import React from 'react';
import RegistrationInputs from './RegistrationInputs'
import RegistrationBtn from './RegistrationBtn'
import { useSelector, useDispatch } from 'react-redux';
import { changeInputActionCreator, userCreator } from '../../store/registrReducer';
import { newModalContentActionCreator, openModalActionCreator } from '../../store/modalReducer';


const StepTwo = () => {

    const {formControls, registration} = useSelector((state)=> state.registrReducer)
    const dispatch = useDispatch()

    const email = formControls.email.value
    const password = formControls.password.value
    const age = formControls.age.value
    const name = formControls.userName.value
    const id = registration.id




    const validAge = formControls.age.valid
    const touchedAge = formControls.age.touched


    function onChangeHandler(event, control){
        dispatch(changeInputActionCreator(event.target.value, control))
        
    }

    function getClasses(cl, valid, touched){
        const classes = [cl]
        if(touched && !valid){
            classes.push(cl + '_invalid')
        }

        if(touched && valid){
            classes.push(cl + '_valid')
        }

        return classes
    }

    function getBool(x){
        let n = false
        if(x === true){
           n = true
        }
        return !n
    }

    function createUser(id, email, password, age, name){
        dispatch(userCreator(id, email, password, age, name))
        dispatch(newModalContentActionCreator('check'))
        dispatch(openModalActionCreator())
    }

   

    return(
        <div className='step_one_content'>
                <div className='step_one_content_header'>
                    <div className='step_content_header_left'>
                        <span>Введите Ваше имя</span>
                    </div>
                    </div>
                <RegistrationInputs  formControls={[formControls.userName, formControls.age]}
                                     onChange = {onChangeHandler}   
                />
                <div className='step_one_content_validation'>

                <div className = 'validation'>
                        <div className={getClasses('validation_check', validAge, touchedAge).join(' ')}></div>
                        <div className={getClasses('validation_text', validAge, touchedAge).join(' ')}>
                            <span>Подтвердите что вам исполнилось 18 лет</span>
                        </div>
                    </div>
                    
                </div>
                <RegistrationBtn disabled={getBool(validAge)}
                                 onClick = {createUser}
                                 arg1 = {id}
                                 arg2 = {email}
                                 arg3 = {password}
                                 arg4 = {age}
                                 arg5 = {name}
                />
            </div>

    )
}


export default StepTwo;
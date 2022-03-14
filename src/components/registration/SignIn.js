import React from 'react';
import RegistrationInputs from './RegistrationInputs';
import RegistrationBtn from './RegistrationBtn';
import { useDispatch, useSelector,  } from 'react-redux';
import {signinAction } from '../../store/registrReducer';
import { changeInputActionCreator } from '../../store/registrReducer';

const SignIn = () => {

    const {formControls} = useSelector((state)=> state.registrReducer)
    const {login, errorMessage} = useSelector((state)=> state.registrReducer.registration)
    const email = formControls.email.value
    const password = formControls.password.value
    const dispatch = useDispatch()
    const validEmail = formControls.email.valid
    const validPassword = formControls.password.valid
    const touchedEmail = formControls.email.touched
    const touchedPassword = formControls.password.touched
    let title = login === 'signin' ? 'Войти' : 'Зарегистрироваться' 

    function auth(){
        dispatch(signinAction(email, password))
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

    function getBool(x, y){
        let n = false
        if(x && y === true){n = true}
        return !n
    }

    function onChangeHandler(event, control){
        dispatch(changeInputActionCreator(event.target.value, control))
    }

    
    return(
        <>
         <RegistrationInputs formControls = {[formControls.email, formControls.password]} onChange = {onChangeHandler}/>
                <div className='step_one_content_validation'>
                {errorMessage ? <div className = 'validation'>
                        <div className= 'validation_check validation_check_invalid'></div>
                        <div className= 'validation_text validation_text_invalid'>
                            <span>{errorMessage}</span>
                        </div>
                    </div> : <></>}
                    <div className = 'validation'>
                        <div className= {getClasses('validation_check', validEmail, touchedEmail).join(' ')}></div>
                        <div className= {getClasses('validation_text', validEmail, touchedEmail).join(' ')}>
                            <span>{validEmail ? 'Введён действительный E-mail' : 'Введите действительный e-mail'}</span>
                        </div>
                    </div>
                    <div className = 'validation'>
                        <div className={getClasses('validation_check', validPassword, touchedPassword).join(' ')}></div>
                        <div className={getClasses('validation_text', validPassword, touchedPassword).join(' ')}>
                            <span>{validPassword ? 'Пароль надёжный' : 'Пароль не менее 8 символов'}</span>
                        </div>
                    </div>
                </div>
                <RegistrationBtn 
                disabled={getBool(validEmail, validPassword) }
                onClick = {auth}
                arg1 = {email}
                arg2 = {password}
                title = {title}
                />
        </>
    )
}



export default SignIn;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {authAction, changeInputActionCreator, loginActionCreator} from '../../store/registrReducer';
import RegistrationBtn from './RegistrationBtn';
import RegistrationInputs from './RegistrationInputs';



const StepOne = () => {

    const {formControls} = useSelector((state)=> state.registrReducer)
    const {login, errorMessage} = useSelector((state)=> state.registrReducer.registration)
    const email = formControls.email.value
    const password = formControls.password.value
    const dispatch = useDispatch()
    const validEmail = formControls.email.valid
    const validPassword = formControls.password.valid
    const touchedEmail = formControls.email.touched
    const touchedPassword = formControls.password.touched

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

    function getBool(x, y){
        let n = false
        if(x && y === true){n = true}
        return !n
    }

    function changeLoginType(type){
        dispatch(loginActionCreator(type))
    }

    function getstyle(cl, type, login){
        const classes = [cl]
        if(type === login){
            classes.push(cl + '_active')
        }
        return classes.join(' ')
    }

    function auth(){
        dispatch(authAction(email, password, login))
    }

    let title = login === 'signin' ? 'Войти' : 'Зарегистрироваться'  
    
   

    return(
        <div className='step_one_content'>
                <div className='step_one_content_header'>
                    <div className = {getstyle('step_one_content_header_left', 'signin', login)}>
                        <span onClick={()=> changeLoginType('signin')}>Войти</span>
                        </div>
                    <div className = {getstyle('step_one_content_header_right', 'signup', login)}>
                        <span onClick={()=> changeLoginType('signup')}>Зарегистрироваться</span>
                        </div>
                    </div>
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
                arg3 = {login}
                title = {title}
                />
            </div>
    )
}

export default StepOne;
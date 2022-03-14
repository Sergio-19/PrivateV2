import React from 'react';
import RegistrationInputs from './RegistrationInputs';
import RegistrationBtn from './RegistrationBtn';
import { useDispatch, useSelector,  } from 'react-redux';
import { signupAction } from '../../store/registrReducer';
import { changeInputActionCreator } from '../../store/registrReducer';

const SignUp = () => {

    const {formControls} = useSelector((state)=> state.registrReducer)
    const {login, errorMessage} = useSelector((state)=> state.registrReducer.registration)
    const email = formControls.email.value
    const password = formControls.password.value
    const name = formControls.userName.value
    const age = formControls.age.value
    const dispatch = useDispatch()
    const validEmail = formControls.email.valid
    const validPassword = formControls.password.valid
    const validAge = formControls.age.valid
    const touchedAge = formControls.age.touched
    const touchedEmail = formControls.email.touched
    const touchedPassword = formControls.password.touched
    let title = login === 'signin' ? 'Войти' : 'Зарегистрироваться' 

    function auth(){
        dispatch(signupAction(email, password, name, age))
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
         <RegistrationInputs formControls = {[formControls.email, formControls.password, formControls.userName,  formControls.age]} onChange = {onChangeHandler}/>
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
                    <div className = 'validation'>
                        <div className={getClasses('validation_check', validAge, touchedAge).join(' ')}></div>
                        <div className={getClasses('validation_text', validAge, touchedAge).join(' ')}>
                            <span>Подтвердите что вам исполнилось 18 лет</span>
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
        </>
    )
}



export default SignUp;
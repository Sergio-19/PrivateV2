import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginActionCreator } from '../../store/registrReducer';
import SignIn from './SignIn';
import SignUp from './SignUp';





const StepComponent = () => {


    function getstyle(cl, type, login){
        const classes = [cl]
        if(type === login){
            classes.push(cl + '_active')
        }
        return classes.join(' ')
    }

    function changeLoginType(type){
        dispatch(loginActionCreator(type))
    }

const {token, login} = useSelector((state)=> state.registrReducer.registration)
const dispatch = useDispatch()

// if(token && login === 'signup'){
//     return(
//         <div className='step_wrap'>
//             <div className='step_header'>
//                 <h1>ByCrypt</h1>
//                 <i className='fa fa-times'/>
//             </div>
//              <StepTwo />
//             </div>
//             )
// }else{
//     return(
//         <div className='step_wrap'>
//             <div className='step_header'>
//                 <h1>ByCrypt</h1>
//                 <i className='fa fa-times'/>
//             </div>
//              <StepOne />
//             </div>
//             )
// }

function goToSite(){
    window.location.href = 'http://bycrypt.ru'
}
    
  return(
    <div className='step_wrap'>
    <div className='step_header'>
        <h1 onClick = {goToSite}>ByCrypt</h1>
        <i className='fa fa-times' onClick = {goToSite}/>
    </div>
    <div className='step_one_content'>
    <div className='step_one_content_header'>
                    <div className = {getstyle('step_one_content_header_left', 'signin', login)}>
                        <span onClick={()=> changeLoginType('signin')}>Войти</span>
                        </div>
                    <div className = {getstyle('step_one_content_header_right', 'signup', login)}>
                        <span onClick={()=> changeLoginType('signup')}>Зарегистрироваться</span>
                        </div>
                    </div>
                    {login === 'signin' ? <SignIn /> : <SignUp />}
    </div>
     {/* <StepTwo /> */}
    </div>
  )
}

export default StepComponent;
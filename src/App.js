import React, { useEffect } from 'react'
import './style/app.scss'
import Header from './components/header/Header'
import Layout from './Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/content/Content'
import { useDispatch, useSelector } from 'react-redux'
import { cupUpdateActionCreator } from './store/cupReducer'
import { difBCHActionCreator, difBTCActionCreator, difETHActionCreator, difLTCActionCreator, difXRPActionCreator } from './store/mainReducer'
import Burger from './components/navigation/Burger'
import Navigation from './components/navigation/Navigation'
import { openMenuActionCreator } from './store/navReducer'
import StepComponent from './components/registration/StepComponent'
import CheckBinding from './components/checkBinding/CheckBinding'
import Modal from './components/modal/Modal'
import MyLoader from './components/loader/MyLoader'
import ConfirmCheck from './components/modal/ConfirmCheck'
import Purse from './components/modal/Purse'
import { hideModalActionCreator, openModalActionCreator, newModalContentActionCreator} from './store/modalReducer'
import { fetchPrivate, privateDataActionCreator } from './store/privateReducer'
import Chat from './components/modal/Chat'
import Loader from './components/loader/Loader'
import { closeMessageActionCreator } from './store/chatReducer'
import Transition from './components/modal/Transition'





const App = () => {

  const actionsArray = [difBTCActionCreator, difETHActionCreator, difXRPActionCreator, difLTCActionCreator, difBCHActionCreator]

  function getRandomId(n) {
    let num = Math.round(Math.random()*n)
    return num
}
  const {isOpen} = useSelector((state)=> state.navReducer)
  const {showModal, modalContent} = useSelector((state)=> state.modalReducer)
  const {login, finishLogin} = useSelector((state)=> state.registrReducer.registration)
  const stateId = useSelector((state)=> state.registrReducer.registration)
  const user = useSelector((state)=> state.privateReducer.user)
  const loading = useSelector((state)=> state.privateReducer.loading)
  const {openMessage} = useSelector((state)=> state.chatReducer)
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('userId')
  const dispatch = useDispatch()

  function openModal(type){
    dispatch(openModalActionCreator())
    dispatch(newModalContentActionCreator(type))
}

function hideModal(){
  dispatch(hideModalActionCreator())
  dispatch(closeMessageActionCreator())
}

const timerId = () => setInterval(()=> {
  let idx = getRandomId(4)
    dispatch(actionsArray[idx]())
    dispatch(cupUpdateActionCreator())
    
}, 5000)

timerId()





function getOptions(type){
  let component = {}
  if(type === 'loader'){
    component = <MyLoader />
  }
  if(type === 'check'){
    component = <CheckBinding />
  }
  if(type === 'confirm'){
    component = <ConfirmCheck number = {user.number}/>
  }
  if(type === 'purse'){
    component = <Purse onClick = {openModal} 
                       number = {user.number}
                       balance = {user.balance}
                       id = {user.id}
                       />
  }
  if(type === 'chat'){
    component = <Chat openMessage={openMessage}/>
  }
  if(type === 'transition'){
    component = <Transition balance = {user.balance}  id = {user.id}/>
  }
  return{component, type}
}


const component = token && login === 'signin' ? 
<><Modal options = {getOptions(modalContent)}
      showModal = {showModal}
      onClick = {hideModal} 
/>
<Burger onClick={()=> dispatch(openMenuActionCreator())}/>
 <Navigation isOpen={isOpen}
             onClick = {()=> dispatch(openMenuActionCreator())}
             showModal = {showModal}
             modalContent = {modalContent}
 />
 <Header/> 
 <Layout>
   <Content />
   <Sidebar />
 </Layout></>:
  <StepComponent />

  const loader = <div 
                  style = {{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Loader />
                </div>




function loaderOrComponent(loading, component, loader){
  let content = ''
  if(loading === true){
    content = component
  }else{content = loader}
  return content
}




useEffect(()=>{
  let id = localStorage.getItem('userId')
  dispatch(fetchPrivate(id))
}, [])



  return(
    
    <div className='app'>
      
      {loaderOrComponent(loading, component, loader)}
     
     
    </div>
  )
}



export default App


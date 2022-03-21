import React from 'react';
import App from './App';
import ConfirmPage from './ConfirmPage';
import {Routes, Route} from "react-router-dom"
import { useSelector } from 'react-redux';




const RoutesPage = () => {

    // let balance = localStorage.getItem('balance')
    // let currentLink = localStorage.getItem('currentLink')




const balance = useSelector((state)=> state.confirmReducer.balance)
const currentLink = useSelector((state)=> state.confirmReducer.currentLink)




    return(
        <>
        <Routes>
           <Route path = "/" element = {<App />}/>
           <Route path = "/confirm" element = {<ConfirmPage balance = {balance} currentLink = {currentLink}/> }/>
        </Routes>
            
        </>
    )
}

export default RoutesPage;
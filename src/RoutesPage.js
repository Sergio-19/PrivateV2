import React from 'react';
import App from './App';
import ConfirmPage from './ConfirmPage';
import {Routes, Route} from "react-router-dom"




const RoutesPage = () => {

const balance = localStorage.getItem('balance')
const currentLink = localStorage.getItem('currentLink')




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
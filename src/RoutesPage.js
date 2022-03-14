import React from 'react';
import App from './App';
import ConfirmPage from './ConfirmPage';
import {Routes, Route} from "react-router-dom"



const RoutesPage = () => {
    return(
        <>
        <Routes>
           <Route path = "/" element = {<App />}/>
           <Route path = "/confirm" element = {<ConfirmPage /> }/>
        </Routes>
            
        </>
    )
}

export default RoutesPage;
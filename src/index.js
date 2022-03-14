import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import { store } from './store';
import {BrowserRouter} from 'react-router-dom'
import RoutesPage from './RoutesPage';



const app = <BrowserRouter><Provider store = {store}><RoutesPage /></Provider></BrowserRouter>


ReactDOM.render(app, document.getElementById('root'))

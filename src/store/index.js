import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {mainReducer} from './mainReducer';
import { cupReducer } from './cupReducer';
import { tradeReducer } from './tradeReducer';
import { navReducer } from './navReducer';
import { registrReducer } from './registrReducer';
import { modalReducer } from './modalReducer';
import { privateReducer } from './privateReducer';
import { creditcardReducer } from './creditcardReducer';
import { chatReducer } from './chatReducer';
import { linksReducer } from './linksReducer';

const rootReducer = combineReducers({mainReducer, 
                                     cupReducer,
                                     tradeReducer, 
                                     navReducer,
                                     registrReducer,
                                     modalReducer,
                                     privateReducer,
                                     creditcardReducer,
                                     chatReducer,
                                     linksReducer
                                    })


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMessageActionCreator } from '../../store/chatReducer';




const ReadMessage = () =>{

    const dispatch = useDispatch()
    const {author, body} = useSelector((state)=> state.chatReducer.currentMessage)
    function closeMessageHandler(){
        dispatch(closeMessageActionCreator())
    }



    return(
        <div className='read_message'>
            <div className='read_message_header'> 
                <i className='fa fa-times'
                   onClick = {closeMessageHandler} 
                />
            </div>
            <div className='read_message_body'> 
                <h3>От: {author}</h3>
                <p>{body}</p>
            </div>
            <div className='read_message_footer'> 
                <button onClick = {closeMessageHandler}>
                    Закрыть
                </button>
            </div>



        </div>
    )
}


export default ReadMessage;
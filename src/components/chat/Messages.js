import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processMessage } from '../../store/chatReducer';
import MessageCard from './MessageCard';



const Messages = () => {

    const {messages, messageDataBaseId} = useSelector((state)=> state.chatReducer)
    const dispatch = useDispatch()

    function openMessageHandler(read, author, body, id, message, messages, i){
            dispatch(processMessage(read, author, body, id, message, messages, i))
    }

    return(
       <>
        <div className='chat_header'>
                  <div className='chat_header_in chat_header_in_active'>
                      <span>Входящие</span>
                      </div> 
                  <div className='chat_header_out'>
                      <span>Исходящие</span>
                      </div> 
                
            </div>
            {  messages.in.length > 0 ? <div className='chat_content'>
                <div className='chat_content_window'>
                   {messages.in.map((message, i)=>{
                       return(
                        <MessageCard  read = {message.read} 
                                      author = {message.author} 
                                      body = {message.body}
                                      id = {messageDataBaseId}
                                      message = {message}
                                      messages = {messages}
                                      i = {i}
                                      key = {i}
                                      onClick = {openMessageHandler}
                                      />
                       )
                   })}
                    
                </div>

            </div> : <div className='no_messages'>
                <h3>Сообщений нет</h3>
              </div>}
            <div className='chat_footer'></div>
        </> 
    )
}

export default Messages;
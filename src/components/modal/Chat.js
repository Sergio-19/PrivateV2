import React from 'react';
import MessageCard from '../chat/MessageCard';
import Messages from '../chat/Messages';
import ReadMessage from '../chat/ReadMessage';




const Chat = ({openMessage}) => {


    return(
        <div className='checkBinding_content'>
            {openMessage ? <ReadMessage /> : <Messages />}
            
            
        </div>
    )
}


export default Chat;
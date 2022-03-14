import React from 'react'



const MessageCard = ({author, read, body, id, message, messages, i, onClick}) => {

    

    return(
        <div className='message'>
            <div className='message_header'>
                <span>
                    <small>От: </small>
                    {author}
                </span>
                <strong style = {{color: read ? '#303030' : '#b3905c'}}>{read ? 'Прочитано' : 'Не прочитано'}</strong>
            </div>
            <div className='message_text_wrap'>
                <div className='message_text'>
                    <p>{body.length > 140 ? body.slice(0, 134) + '.....' : body + '.....'}</p>
                </div>
            </div>
            <div className='message_footer'>
                <button onClick = {()=> onClick(read, author, body, id, message, messages, i)}>Открыть</button>
            </div>
        </div>
    )
}


export default MessageCard;
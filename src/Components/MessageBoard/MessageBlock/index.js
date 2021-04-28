import React from 'react';
import Message from '../Message';
import {useMessage} from '../AddMessageForm/useMessage';

const MessageBlock = ({messageData, searchName}) => {
    const {msgData} = useMessage();
    
    let messages = messageData
        .filter((item) => { return item.author.indexOf(searchName)!==-1})
        .map((item, index) => {
            return <Message key={index} author={item.author} time={item.time} body={item.body}></Message>
      })

    return (
        <div>{messages}</div>
    )
}

export default MessageBlock;
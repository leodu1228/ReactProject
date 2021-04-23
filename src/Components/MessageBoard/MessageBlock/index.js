import React from 'react';
import Message from '../Message';

const MessageBlock = ({messageData, searchName, addMessageAuthor,addMessageBody}) => {
    messageData[messageData.lengh+1] = {author:addMessageAuthor, time:new Date().toLocaleTimeString, body:addMessageBody}
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
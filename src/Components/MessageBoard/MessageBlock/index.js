import React from 'react';
import Message from '../Message';

const MessageBlock = ({msgData, searchName}) => {
    let allMessages = msgData
        .filter((item) => { return item.author.indexOf(searchName)!==-1})
        .map((item, index) => {
            return <Message key={index} author={item.author} time={item.time} body={item.body}></Message>
      })

    return (
        <div>{allMessages}</div>
    )
}

export default MessageBlock;
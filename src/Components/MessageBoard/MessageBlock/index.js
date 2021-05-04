import React from 'react';
import Message from '../Message';

const MessageBlock = ({msgData, searchName}) => {

    let allMessages = msgData
        .filter((item) => { return item.author.indexOf(searchName)!==-1})
        .map((item, index) => {
            return <Message key={index} author={item.author} time={item.time} body={item.body}></Message>
      })

    let print = console.log(msgData, Array.isArray(msgData))
    return (
        <div>{allMessages}
            <div>{print}</div>
        </div>
    )
}

export default MessageBlock;
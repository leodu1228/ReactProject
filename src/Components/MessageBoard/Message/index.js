import React from 'react';
import MessageContainer from './MessageContainer';
import MessageHead from './MessageHead';
import MessageAuthor from './MessageAuthor';
import MessageTime from './MessageTime';
import MessageBody from './MessageBody';

// function component版本
const Message = ({author, time, body}) => {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      
      <MessageBody>{body}</MessageBody>
    </MessageContainer>
  )
}

export default Message;
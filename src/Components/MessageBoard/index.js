import React, { Children } from 'react';
import Page from './Page';
import Title from './Title';
import MessageForm from './MessageForm';
import MessageLable from './MessageLabel';
import MessageTextArea from './MessageTextArea';
import SubmitButton from './SubitButton';
import MessageBlock from './MessageBlock';
import Message from './Message';
import MessageSearch from './MessageSearch';



const MessageBoard = ({messageData}) => {
  let messages = messageData.map((item) => {
    return <Message author={item.author} time={item.time} children={item.children}></Message>
  })

  return (
    <Page>
      <Title>React留言板</Title>
      <MessageForm>
        <MessageLable>來嘴一波</MessageLable>
        <MessageTextArea rows={8} />
        <SubmitButton>送出</SubmitButton>
      </MessageForm>
      <MessageBlock messageData={messageData}>
          <MessageSearch></MessageSearch>
        {messages}
      </MessageBlock>
    </Page>
  )
}

export default MessageBoard;






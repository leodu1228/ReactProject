import React from 'react';
import Page from './Page';
import Title from './Title';
import MessageForm from './MessageForm';
import MessageLable from './MessageLabel';
import MessageTextArea from './MessageTextArea';
import SubmitButton from './SubitButton';
import MessageBlock from './MessageBlock';
import Message from './Message';




const MessageBoard = ()=> {
    return(
        <Page>
        <Title>React 留言板</Title>
        <MessageForm>
          <MessageLable>留言內容</MessageLable>
          <MessageTextArea rows={8} />
          <SubmitButton>送出</SubmitButton>
        </MessageForm>
        <MessageBlock>
          <Message author={"Heidi"} time="2020-12-05 12:12:12">一則留言</Message>
        </MessageBlock>
      </Page>
    )
}

export default MessageBoard;












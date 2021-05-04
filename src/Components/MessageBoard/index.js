import React from 'react';
import Page from './Page';
import Title from './Title';
import AddMessageForm from './AddMessageForm';
import MessageBlock from './MessageBlock';
import SearchBlock from './SearchBlock';
import {useMessage} from './AddMessageForm/useMessage';
import {useSearchMessage} from './useSearchMessage';

const MessageBoard = ({messageData}) => {
  const {msgData, setMsgData} = useMessage(messageData); // 把傳入的messageData設定為msgData state的初始值
  const {messages, setMessages, name, setName} = useMessage();
  const {searchName, setSearchName} = useSearchMessage();
  return (
    <Page>
      <Title></Title>
      <AddMessageForm msgData={msgData} setMsgData={setMsgData} name={name} setName={setName} messages={messages} setMessages={setMessages}></AddMessageForm>
      <SearchBlock setSearchName ={setSearchName}></SearchBlock>
      <MessageBlock msgData ={msgData} searchName={searchName}>
        {/*多個Message, 由MessageBlock產生*/}
      </MessageBlock>
    </Page>
  )
}

export default MessageBoard;






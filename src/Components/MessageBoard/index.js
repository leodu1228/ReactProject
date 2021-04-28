import React, { Children, useState } from 'react';
import Page from './Page';
import Title from './Title';
import AddMessageForm from './AddMessageForm';
import MessageBlock from './MessageBlock';
import SearchBlock from './SearchBlock';
import {useMessage} from './AddMessageForm/useMessage';


const MessageBoard = ({messageData}) => {
  const [searchName, setSearchName] = useState(''); // 將搜尋的名字存在state傳給 SearchBlock和 MessageBlock
  const {messages, name} = useMessage();

  return (
    <Page>
      <Title>天下第一嘴砲大會</Title>
      <AddMessageForm messageData={messageData}></AddMessageForm>
      <SearchBlock setSearchName ={setSearchName}></SearchBlock>
      <MessageBlock messageData ={messageData} searchName={searchName} messsages={messages} name={name}>
        {/*多個Message, 由MessageBlock產生*/}
      </MessageBlock>
    </Page>
  )
}

export default MessageBoard;






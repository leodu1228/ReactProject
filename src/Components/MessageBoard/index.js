import React from 'react';
import Page from './Page';
import Title from './Title';
import AddMessageForm from './AddMessageForm';
import MessageBlock from './MessageBlock';
import SearchBlock from './SearchBlock';
import { useAddMessage } from './AddMessageForm/useAddMessage';
import { useSearchMessage } from './useSearchMessage';

const MessageBoard = ({ messageData }) => {
	const {
		msgData,
		submit,
		setNameCallback,
		setMessagesCallback} = useAddMessage(messageData);
	const { searchName, setSearchName } = useSearchMessage();
	return (
		<Page>
			<Title></Title>
			<AddMessageForm submit={submit} setNameCallback={setNameCallback} setMessagesCallback={setMessagesCallback}></AddMessageForm>
			<SearchBlock setSearchName={setSearchName}></SearchBlock>
			<MessageBlock msgData={msgData} searchName={searchName}>
				{/*多個Message, 由MessageBlock產生*/}
			</MessageBlock>
		</Page>
	);
};

export default MessageBoard;

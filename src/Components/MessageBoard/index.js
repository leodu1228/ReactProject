import React from 'react';
import Page from './Page';
import Title from './Title';
import AddMessageForm from './AddMessageForm';
import MessageBlock from './MessageBlock';
import SearchBlock from './SearchBlock';
import { useMessage } from './AddMessageForm/useMessage';
import { useSearchMessage } from './useSearchMessage';

const MessageBoard = ({ messageData }) => {
	const {
		msgData,
		submit,
		addName,
		addMessages} = useMessage(messageData);
	const { searchName, setSearchName } = useSearchMessage();
	return (
		<Page>
			<Title></Title>
			<AddMessageForm msgData={msgData} submit={submit} addName={addName} addMessages={addMessages}></AddMessageForm>
			<SearchBlock setSearchName={setSearchName}></SearchBlock>
			<MessageBlock msgData={msgData} searchName={searchName}>
				{/*多個Message, 由MessageBlock產生*/}
			</MessageBlock>
		</Page>
	);
};

export default MessageBoard;

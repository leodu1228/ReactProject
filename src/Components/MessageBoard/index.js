import React, { createContext, useState } from 'react';
import Page from './Page';
import Title from './Title';
import AddMessageForm from './AddMessageForm';
import MessageBlock from './MessageBlock';
import SearchBlock from './SearchBlock';
import { useAddMessage } from './AddMessageForm/useAddMessage';
import { useSearchMessage } from './useSearchMessage';

export const ThemeContext = React.createContext()


const MessageBoard = ({ messageData }) => {
	const [dark, setDark] = useState(true);

	const {
		msgData,
		submit,
		setNameCallback,
		setMessagesCallback} = useAddMessage(messageData);
	const { searchName, setSearchName } = useSearchMessage();
	return (
		<ThemeContext.Provider value ={dark}>
			<Page>
				<Title></Title>
				<AddMessageForm submit={submit} setNameCallback={setNameCallback} setMessagesCallback={setMessagesCallback}></AddMessageForm>
				<SearchBlock setSearchName={setSearchName}></SearchBlock>
				<MessageBlock msgData={msgData} searchName={searchName}>
					{/*多個Message, 由MessageBlock產生*/}
				</MessageBlock>
			</Page>
		</ThemeContext.Provider>
	);
};

export default MessageBoard;

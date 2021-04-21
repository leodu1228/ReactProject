import React from 'react';
import Wrapper from './Wrapper';
import Content from './Content';
import Input from './Input';
import Select from './Select';
import { useMessage } from './useMessage';

const AddMessage = ({messageData}) => {
	const { messages, setInputValue, addMessage } = useMessage();
	return (
		<Wrapper>
            <Select messageData={messageData}/>
			<Input messageData={messageData} setInputValue={setInputValue} addMessage={addMessage} />
			{messages.map((item) => {
				return <Content name={item.name} message={item.message} />;
			})}
		</Wrapper>
	);
};

export default React.memo(AddMessage);

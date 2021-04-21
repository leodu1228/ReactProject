import React, { useState } from 'react';

const Input = ({messageData, selectName, setInputValue }) => {
	const [inputValue, getInputValue] = useState('');


	return (
		<div>
			<input getInputValue = {(event)=>{getInputValue(event.target.value)}} />
			<button addMessage='' onClick=''>按我新增</button>
		</div>
	);
};

export default React.memo(Input);
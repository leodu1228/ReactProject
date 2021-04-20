import React from 'react';

const Input = ({ addMessage, setInputValue }) => {
	return (
		<div>
			<input onChange={setInputValue} />
			<button onClick={addMessage}>按我新增</button>
		</div>
	);
};

export default React.memo(Input);
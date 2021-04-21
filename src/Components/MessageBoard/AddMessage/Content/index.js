import react from 'react';

const Message = ({ name, message }) => {
	return (
		<>
			<div>{name}說：</div>
			<div>{message}</div>
		</>
	);
};

export default react.memo(Message);
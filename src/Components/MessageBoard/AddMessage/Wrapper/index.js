import React from 'react';

const Wrapper = ({ children }) => {
	return (
		<div style={{ marginBottom: '20', paddingLeft: '20px' }}>{children}</div>
	);
};

export default React.memo(Wrapper);

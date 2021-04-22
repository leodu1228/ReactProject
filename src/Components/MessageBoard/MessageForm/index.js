import React from 'react';
import '../style.css';

const msgformStyle = {
    border: "7px solid rgba(0, 0, 0, 0.125)",
    padding: "10px",
    borderRadius: "4px"
}

const MessageForm = ({children}) => {
    return(
        <div style={msgformStyle}>{children}</div>
    )
}

export default MessageForm;
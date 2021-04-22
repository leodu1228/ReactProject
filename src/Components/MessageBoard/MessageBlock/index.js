import React from 'react';
import "../style.css";

const MessageBlock = ({children}) => {
    return (
        <div className="messageBlock">{children}</div>
    )
}

export default MessageBlock;
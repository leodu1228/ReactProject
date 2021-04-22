import React from 'react';
import '../../style.css';

const MessageContainer = ({ children }) => {
    const containerStyle = {
        border: "3px solid rgba(0, 0, 0, 0.25)",
        padding: "10px",
        borderRadius: "4px"
    }

    return (
        <div style={containerStyle}>{children}</div>
    )
}

export default MessageContainer;
import React from 'react';
import '../../style.css';

const MessageBody = ({children}) => {
    const msgbodyStyle = {
        marginTop: "8px",
        wordBreak: "break-all",
        whiteSpace: "pre-line",
      }
    return(
        <div style={msgbodyStyle}>{children}</div>
    )
}

export default MessageBody;
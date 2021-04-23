import React from 'react';
import '../../style.css';

const msgheadStyle = {  display: "flex"}

const MessageHead = ({children}) => {
    return(
        <div style={msgheadStyle}>{children}</div>
    )
}

export default MessageHead;
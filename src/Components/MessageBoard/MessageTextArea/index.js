import React, { useState } from 'react';
import "../style.css";

const textareaStyle = {
    // display: "block",
    marginTop: "8px",
    width: "95%",
    borderColor: "rgba(0, 0, 0, 0.125)",
  }

const MessageTextArea = () => {
    const [inputValue, setInputValue] = useState('');



    return(
        <textarea  style={textareaStyle}></textarea>
    )
}

export default MessageTextArea;
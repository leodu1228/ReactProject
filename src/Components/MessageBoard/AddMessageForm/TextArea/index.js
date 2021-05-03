import React from 'react';


const textareaStyle = {
    // display: "block",
    marginTop: "8px",
    width: "95%",
    borderColor: "rgba(0, 0, 0, 0.125)",
  }

const TextArea = ({setMessages}) => {
    return(
        <textarea style={textareaStyle} 
        onChange={ e=>(setMessages(e.target.value))}></textarea>
    )
}

export default TextArea;
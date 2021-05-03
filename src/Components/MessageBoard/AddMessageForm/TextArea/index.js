import React from 'react';


const textareaStyle = {
    // display: "block",
    marginTop: "8px",
    width: "95%",
    borderColor: "rgba(0, 0, 0, 0.125)",
  }

const TextArea = ({messages, setMessages}) => {
    const addMessages = (e) => {
        setMessages(e.target.value)
    }

    return(
        <textarea onChange={addMessages} style={textareaStyle} ></textarea>
    )
}

export default TextArea;
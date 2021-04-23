import React from 'react';


const textareaStyle = {
    // display: "block",
    marginTop: "8px",
    width: "95%",
    borderColor: "rgba(0, 0, 0, 0.125)",
  }

const TextArea = ({updateAddMessageBody}) => {
    return(
        <textarea  style={textareaStyle}  onchange={(event)=>(updateAddMessageBody(event.target.value))}></textarea>
    )
}

export default TextArea;
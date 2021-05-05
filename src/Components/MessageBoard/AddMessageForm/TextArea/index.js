import React from 'react';

const textareaStyle = {
    // display: "block",
    marginTop: "8px",
    width: "95%",
    borderColor: "rgba(0, 0, 0, 0.125)",
  }

const TextArea = ({setMessagesCallback}) => {
    return(
        <textarea onBlur={setMessagesCallback} style={textareaStyle} ></textarea>
    )
}
export default React.memo(TextArea);
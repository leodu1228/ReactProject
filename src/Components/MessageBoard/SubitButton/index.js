import React from 'react';
import '../style.css';

const btnStyle = {
    margin: "8px 0px",
    color: "black",
    backgroundColor: '#E0E0E0',
    border:"1px solid transparent",
    borderRadius:"4px",
    padding: "6px 12px",
    fontsize: "13px",
  }

const SubmitButton = ({children}) => {
    return(
        <button style={btnStyle}>{children}</button>
    )
}

export default SubmitButton;
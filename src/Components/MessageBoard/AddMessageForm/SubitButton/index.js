import React from 'react';

const btnStyle = {
    margin: "8px 0px",
    color: "black",
    backgroundColor: '#E0E0E0',
    border:"1px solid transparent",
    borderRadius:"4px",
    padding: "6px 12px",
    fontsize: "13px",
  }

const SubmitButton = ({name, messages, msgData, setMsgData}) => {
    return(
        <button onClick={ ()=> 
            // (name!=='請輸入留言者姓名') ? setMsgData(msgData.push({author:name, tiem: new Date().toLocaleTimeString, body: messages})) : window.alert('請選擇留言者姓名!')
            setMsgData(msgData.push({author:name, tiem: new Date().toLocaleTimeString, body: messages}))
            } 
            style={btnStyle}>送出</button>
    )
}

export default SubmitButton;
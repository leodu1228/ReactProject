import React from 'react';
import Lable from './Label';
import TextArea from './TextArea';
import SubmitButton from './SubitButton';
import Select from './Select';

const msgformStyle = {
    border: "7px solid rgba(0, 0, 0, 0.125)",
    padding: "10px",
    borderRadius: "4px"
}

const AddMessageForm = ({msgData, setMsgData,name, setName, messages, setMessages}) => {
    return(
        <div style={msgformStyle}>
            <Lable>來嘴一波</Lable>
            <Select msgData={msgData} name={name} setName={setName}></Select>
            <TextArea messages ={messages} setMessages={setMessages}></TextArea>
            <SubmitButton msgData={msgData} name={name} messages={messages} setMsgData={setMsgData}></SubmitButton>
        </div>
    )
}

export default AddMessageForm;
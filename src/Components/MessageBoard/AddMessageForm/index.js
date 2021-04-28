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

const AddMessageForm = ({messageData}) => {
    return(
        <div style={msgformStyle}>
            <Lable>來嘴一波</Lable>
            <Select messageData={messageData}></Select>
            <TextArea messageData={messageData}></TextArea>
            <SubmitButton messageData={messageData}></SubmitButton>
        </div>
    )
}

export default AddMessageForm;
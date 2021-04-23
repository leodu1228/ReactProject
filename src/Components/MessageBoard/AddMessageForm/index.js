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

const AddMessageForm = ({messageData, addMessageAuthor, addMessageBody, updateAddMessageAuthor,updateAddMessageBody}) => {
    return(
        <div style={msgformStyle}>
            <Lable>來嘴一波</Lable>
            <Select messageData={messageData} updateAddMessageAuthor={updateAddMessageAuthor}></Select>
            <TextArea updateAddMessageBody={updateAddMessageBody}></TextArea>
            <SubmitButton messageData={messageData} addMessageAuthor={addMessageAuthor} addMessageBody={addMessageBody}></SubmitButton>
        </div>
    )
}

export default AddMessageForm;
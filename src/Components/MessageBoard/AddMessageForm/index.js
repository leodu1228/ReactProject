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

const AddMessageForm = ({msgData,submit,addName,addMessages}) => {
    return(
        <div style={msgformStyle}>
            <Lable>來嘴一波</Lable>
            <Select msgData={msgData} addName={addName}></Select>
            <TextArea addMessages={addMessages}></TextArea>
            <SubmitButton submit={submit}></SubmitButton>
        </div>
    )
}

export default React.memo(AddMessageForm);
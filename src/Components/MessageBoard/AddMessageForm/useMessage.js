import React, {useState} from 'react';

export const useMessage = ({data}) => {
    const [messages, setMessages] = useState();
    const [name, setName] = useState();
    const [msgData, setMsgData] = useState(data);

    return{
        messages,setMessages, 
        name, setName, 
        msgData, setMsgData
    }
}
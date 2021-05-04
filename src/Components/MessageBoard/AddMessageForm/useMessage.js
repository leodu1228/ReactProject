import {useCallback, useState} from 'react';

export const useMessage = (data) => {
    const [messages, setMessages] = useState('');
    const [name, setName] = useState('');
    const [msgData, setMsgData] = useState(data);
    const submit = useCallback(() => {
        let arr = [...msgData];
        arr.push({author:name, time:new Date().toLocaleTimeString(), body:messages});
        setMsgData(arr);
    },[msgData, name, messages, setMsgData])
    
    const addName = useCallback((e) => {
        setName(e.target.value);
    }, [setName])

    const addMessages = useCallback((e)=>{
        setMessages(e.target.value);
    }, [setMessages])

    return{
        messages,setMessages, 
        name, setName, 
        msgData, setMsgData,
        submit, addName, addMessages
    }
}
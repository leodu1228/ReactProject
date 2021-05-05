import {useCallback, useState} from 'react';

export const useAddMessage = (data) => {
    const [messages, setMessages] = useState('');
    const [name, setName] = useState('');
    const [msgData, setMsgData] = useState(data);

    const submit = useCallback(() => {
        // 淺拷貝方式: 
        // msgData.map(x=>x) 
        // Object.assign([], msgData)
        let arr = [...msgData]; 
        arr.push({author:name, time:new Date().toLocaleTimeString(), body:messages});
        setMsgData(arr);
        console.log('add a new message');
    },[msgData, name, messages, setMsgData])
    
    const setNameCallback = useCallback((e) => {
        setName(e.target.value);
        console.log('set name state')
    }, [setName])

    const setMessagesCallback = useCallback((e)=>{
        setMessages(e.target.value);
        console.log('set messages state')
    }, [setMessages])

    return{
        messages, 
        name, 
        msgData, 
        submit, setNameCallback, setMessagesCallback
    }
}
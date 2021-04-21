import { useState, useCallback , useEffect} from 'react';


// 自訂義Hook
export const useMessage = () => {
    const [messages, setMessages] = useState([{name: '留言者姓名 Paddy',message: "我想要可以新增留言"}]);
    
    return {
        messages,setMessages
    }
}
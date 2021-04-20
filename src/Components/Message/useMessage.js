import { useState, useCallback , useEffect} from 'react';

export const useMessage = () => {
    const [messages, setMessages] = useState([{name: '留言者姓名 Paddy',message: "我想要可以新增留言"}]);
    return {
        messages
    }
}
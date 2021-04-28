import React from 'react';
import {useMessage} from '../useMessage';

const Select = ({messageData}) => {
    const options = messageData.map((item,index)=>{
        return <option key={index}>{item.author}</option>
    })

    const {setName} = useMessage();

    return(
        <select onchange={(e)=> (setName(e.target.value))}>
            <option key='first' value='first'>選擇留言姓名</option>
            {options}
        </select>
    )
}

export default Select;
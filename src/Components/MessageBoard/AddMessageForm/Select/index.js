import React from 'react';

const Select = ({msgData, setName}) => {
    const options = msgData.map((item,index)=>{
        return <option key={index}>{item.author}</option>
    })
    
    return(
        <select onChange={(e)=> (setName(e.target.value))}>
            <option key='first' value='first'>選擇留言姓名</option>
            {options}
        </select>
    )
}

export default Select;
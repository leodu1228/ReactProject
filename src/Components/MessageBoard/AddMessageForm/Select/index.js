import React from 'react';

const Select = ({messageData, updateAddMessageAuthor}) => {
    const options = messageData.map((item,index)=>{
        return <option key={index}>{item.author}</option>
    })

    return(
        <select onchange={(event)=> (updateAddMessageAuthor(event.target.value))}>
            <option key='first' value='first'>選擇留言姓名</option>
            {options}
        </select>
    )
}

export default Select;
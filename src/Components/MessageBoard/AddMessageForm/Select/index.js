import React from 'react';

const Select = ({msgData, name, setName}) => {
    // const options = msgData.forEach((item,index)=>{
    //     return <option key={index}>{item.author}</option>
    // })

    const options = msgData.map( (item,index) => {
        return <option key={index}>{item.author}</option>
    });

    const addName = (e) => {
        setName(e.target.value)
    }
    

    return(
        <select onChange={addName}>
            <option key='0'  value='first'>選擇留言者姓名</option>
            {options}
        </select>
    )
}

export default Select;
import React from 'react';
// map 會產生一個新的陣列放入迭代後的每個值
const Select = ({setNameCallback}) => {
    const allName = ['招貓','Leo','Paddy'];
    const nameOptions = allName.map((item, index) => {
        return <option key={index}>{item}</option>
    })
    return(
        <select onChange={setNameCallback}>
            <option key='0'  value='first'>選擇留言者姓名</option>
            {nameOptions}
        </select>
    )
}

export default React.memo(Select);
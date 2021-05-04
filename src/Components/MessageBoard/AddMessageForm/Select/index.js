import React from 'react';
// map 會產生一個新的陣列放入迭代後的每個值
const Select = ({msgData, addName}) => {
    const options = msgData.map((item,index)=>{  
       return <option key={index}>{item.author}</option>
    });
    
    return(
        <select onChange={addName}>
            <option key='0'  value='first'>選擇留言者姓名</option>
            {options}
        </select>
    )
}

export default React.memo(Select);
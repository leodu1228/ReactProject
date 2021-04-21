import React, { useState } from 'react';

const Select = ({ messageData }) => {
    let options = messageData
        .map((item, index) => { return (<option key={index} >{item.name}</option>) })

    return (
        <select>
            <option key='default' value='default'>選擇留言姓名</option>
            {options}
        </select>
    )
};

export default React.memo(Select);

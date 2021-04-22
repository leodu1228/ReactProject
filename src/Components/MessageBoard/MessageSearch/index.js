import React from 'react';


const searchStyle = {
    margin: "30px 0px 5px 0px", // 上右下左的 margin
    border: "3px solid rgba(0, 0, 0, 0.25)",
    padding: "10px",
    borderRadius: "4px"
}

const MessageSearch = () => {
    return(
        <div style={searchStyle}>
            <span>搜尋嘴砲仔 : </span>
            <input type="text" placeholder="輸入你心中的嘴砲仔"></input>
        </div>
    )
}


export default MessageSearch;
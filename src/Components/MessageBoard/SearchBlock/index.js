import React, { useContext } from 'react';
import {ThemeContext} from '../index.js';

// const searchStyle = {
//     margin: "30px 0px 5px 0px", // 上右下左的 margin
//     border: "3px solid rgba(0, 0, 0, 0.25)",
//     padding: "10px",
//     borderRadius: "4px"
// }



const SearchBlock = ({setSearchName}) => {
    const darkTheme = useContext(ThemeContext);
    const themeStyle = {
            backgroundColor: darkTheme ? '#2c3e50': '#f1c40f',
            color: darkTheme ? '#ecf0f1' : '#2c3e50',
            margin: "30px 0px 5px 0px", // 上右下左的 margin
            border: "3px solid rgba(0, 0, 0, 0.25)",
            padding: "10px",
            borderRadius: "4px"
    }
    return(
            <div style={themeStyle}>
                <span>搜尋嘴砲仔 : </span>
                <input onChange={(event)=>(setSearchName(event.target.value))}
                    type="text" placeholder="輸入你心中的嘴砲仔"></input>
            </div>
    )
}


export default SearchBlock;
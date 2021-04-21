import React from 'react';


// Class Component版本
// 負責處理每一則留言的格式
// class Message extends React.Component{
//     render(){
//         let divStyle={marginBottom:20}
//         let messageStyle={marginLeft:20}
//         return(
//             <div style={divStyle}>
//                 {/*把每筆傳進來的留言資料都放好後回傳*/}
//                 <div>{this.props.name}說：</div>
//                 <div style={messageStyle}>{this.props.message}</div>
//             </div>
//         )
//     }
// }

// function component版本
const Message =(name, message) => {
    let divStyle = { marginBottom: 20 }
    let messageStyle = { marginLeft: 20 }
    return (
        <div style={divStyle}>
            {/*把每筆傳進來的留言資料都放好後回傳*/}
            <div>{name}說：</div>
            <div style={messageStyle}>{message}</div>
        </div>
    )
}

export default  Message;
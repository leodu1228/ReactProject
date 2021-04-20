import React, { useState} from 'react';



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
function Message(props) {
    let divStyle = { marginBottom: 20 }
    let messageStyle = { marginLeft: 20 }
    return (
        <div style={divStyle}>
            {/*把每筆傳進來的留言資料都放好後回傳*/}
            <div>{props.name}說：</div>
            <div style={messageStyle}>{props.message}</div>
        </div>
    )
}

// 負責將每一則留言包裝起來
// class MessageBlock extends React.Component{
//     render(){
//         //用map迴圈把每筆留言的資料都用props傳進Message組件放好，再指定給message
//         let message = this.props.messageData.map((item)=>{
//             //判斷留言者item.name中是否有this.props.searchName的值，如果有就執行，沒有就不動作
//             if(item.name.indexOf(this.props.searchName)!= -1)
//                 return <Message name={item.name} message={item.message} />
//         })
//         return (
//             <div>
//                 {/*回傳放完留言資料的message變數*/}
//                 {message}
//             </div>
//         )
//     }
// }
function MessageBlock(props) {
    //用map迴圈把每筆留言的資料都用props傳進Message組件放好，再指定給message
    let message = props.messageData
    //判斷留言者item.name中是否有this.props.searchName的值，如果有就執行，沒有就不動作
        .filter(item => item.name.indexOf(props.searchName !==-1))
        .map((item,index) => {
            // 必須給key 讓每個元件是唯一的 
            return <Message key={index} name={item.name} message={item.message} />
    })

    return (
        <div>
            {/*回傳放完留言資料的message變數*/}
            {message}
        </div>
    )
}


//SearchBlock
// class SearchBlock extends React.Component {
//     render() {
//         let divStyle = { margin: 10 }
//         return (
//             <div style={divStyle}>
//                 <span>搜尋留言人 : </span>
//                 <input type="text"
//                     value={this.props.searchName}
//                     onChange={this.props.changeState}>
//                 </input>
//             </div>
//         )
//     }
// }
function SearchBlock(props) {
    let divStyle = { margin: 10 }
    return (
        <div style={divStyle}>
            <span>搜尋留言人 : </span>
            <input type="text"
                value={props.searchName}
                onChange={props.changeState}>
            </input>
        </div>
    )
}

// export default class MessageForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = ({name:''})

//         // changeState用來在使用者輸入值的時候觸發事件，改變state
//         this.changeState = this.changeState.bind(this)
//     }

//     changeState(event){
//         this.setState({name:event.target.value})
//     }

//     render() {
//         return (
//             <div>
//                 {/*把state中的name和執行的事件都用props給SearchBlock*/}
//                 <SearchBlock searchName={this.state.name} changeState={this.changeState}></SearchBlock>
//                 <hr/>
//                  {/*傳入state的name用來篩選留言*/}
//                 <MessageBlock messageData={this.props.messageData} searchName={this.state.name}></MessageBlock>
//             </div>
//         )
//     }
// }

export default function MessageForm(props) {
    const [name, changeState] = useState('');

    return (
        <div>
            <SearchBlock searchName={name} changeState={(event) => { changeState(event.target.value)}}></SearchBlock>
            <hr />
            <MessageBlock searchName={name} messageData={props.messageData} ></MessageBlock>
        </div>
    )
}












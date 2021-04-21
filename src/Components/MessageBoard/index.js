import React, { useState } from 'react';
import SearchBlock from './SearchBlock';
import MessageBlock from './MessageBlock';



const MessageBoard = ({messageData})=> {
    const [name, changeState] = useState('');

    return (
        <div>
            <SearchBlock searchName={name} changeState={(event) => { changeState(event.target.value) }}></SearchBlock>
            <hr />
            <MessageBlock searchName={name} messageData={messageData} ></MessageBlock>
        </div>
    )
}

export default MessageBoard;

// export default class MessageBoard extends React.Component {
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











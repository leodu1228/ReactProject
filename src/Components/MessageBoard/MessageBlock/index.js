import React from 'react';
import Message from '../Message'

const MessageBlock = ({messageData, searchName}) => {
    //用map迴圈把每筆留言的資料都用props傳進Message組件放好，再指定給message
    let message = messageData
        //判斷留言者item.name中是否有searchName的值，如果有就執行，沒有就不動作
        .filter((item) => {return item.name.indexOf(searchName !== -1)})
        // map函式必須在"箭頭函式"後面就返回值, 因此把條件篩選放在上面先執行, 否則會跳警告
        .map((item, index) => {
            // 必須給key 讓每個Message元件是唯一的 
            return <Message key={index} name={item.name} message={item.message} />
        })

    return (
        <div>
            {/*回傳放完留言資料的message變數*/}
            {message}
        </div>
    )
}

export default MessageBlock;


//// 負責將每一則留言包裝起來
// class MessageBlock extends React.Component {
//     render() {
//         //用map迴圈把每筆留言的資料都用props傳進Message組件放好，再指定給message
//         let message = this.props.messageData
//             .filter(item => item.name.indexOf(this.props.searchName !== -1))
//             .map((item) => {
//                 return <Message name={item.name} message={item.message} />
//             })
//         return (
//             <div>
//                 {/*回傳放完留言資料的message變數*/}
//                 {message}
//             </div>
//         )
//     }
// }
import React from 'react'


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
const SearchBlock = ({searchName, changeState}) => {
    let divStyle = { margin: 10 }
    return (
        <div style={divStyle}>
            <span>搜尋留言人 : </span>
            <input type="text"
                value={searchName}
                onChange={changeState}>
            </input>
        </div>
    )
}


export default SearchBlock;
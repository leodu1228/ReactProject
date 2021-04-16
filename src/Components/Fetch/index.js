import React, { useState } from 'react';

// export default class Fetch extends React.Component{
//     constructor(){
//         super();
//         this.state = {};
//         this.handleClick = this.handleClick.bind(this);
//     }


//     handleClick(){
//         fetch('https://api.github.com/users/jserv/repos',{method:"GET"})
//         .then(res => res.json())
//         .then(data => {
//             this.setState({repoName: data[0]['name']});
//         })
//         .catch(e => {console.log(e);
//         })
//     }


//     render(){
//         return(
//             <div className='App'>
//                 <div className='data-display'>
//                     {this.state.repoName===null?"目前還有沒有資料":this.state.repoName}
//                 </div>
//                 <button onClick={this.handleClick}>取得jserv以英英文字母排序的第一個repo
//                 </button>
//             </div>
//         )
//     }
// }

export default function Fetch(){
    const [currentData, setCurrentData] = useState({repoName:''});

    const handleClick = () => {
        const requestURL = 'https://api.github.com/users/jserv/repos';

        fetch(requestURL, { method: "GET" })
            .then( (res)=> res.json())
            .then( (data)=> {
                setCurrentData({repoName:data[0]['name']})
            })
            .catch( (e)=> {console.log(e)})
    }

    return (
        <div className='App'>
            <button onClick={handleClick}>取得jserv以英文字母排序的第一個repo</button>
            <div className='data-display'>repoName:{currentData.repoName}</div>
        </div>
    )
}


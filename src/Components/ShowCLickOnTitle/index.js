import React, {useState, useEffect} from 'react';


// export default class ShowClickOnTitle extends React.PureComponent{
//     constructor(props){
//         super(props);
//         this.state = {count: 0,};
//     }

//     componentDidMount(){
//         document.title = `You clicked ${this.state.count} times.`
//     }

//     componentDidUpdate(){
//         document.title = `You clicked ${this.state.count} times.`
//     }


//     render(){
//         return(
//             <div> 
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={()=> this.setState({count:this.state.count+1})}>
//                 Click Me Plz!
//                 </button>
//             </div>
//         )
//     }
// }


// React Hook
const ShowClickOnTitle = () => {
    // userState() 參數為state的起始值, return 出一對值, 類似class 中的this.state.count 和 this.setState
    // 利用 [] 做"陣列解構賦值", 是js的語法並非React
    const [count, setCount] = useState(0); 

    // 在component放useEffect, 讓我們可以從effect中存取count state變數
    // 每次render後都會執行useEffect, 在第一個render和之後的每個更新render都會執行, 於是可以取代class的生命週期方法, 這邊就取代了DidMount和DidUpdate方法
    // effect 表示傳入useEffect的function，用瀏覽器 API document.title設定了網頁標題。讀取 effect中最新的 count，因為它在我們 function 的範圍內。
    // 當 React render 我們的 component 時，它會記住我們使用的 effect，然後在更新 DOM 後執行我們的 effect。每次 render 都是這樣，包括第一次
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })

    return(
        <div> 
            <p>You clicked {count} times</p>
            <button onClick = {()=>{setCount(count+1)}}>  
            Click Me Plz!
            </button>
        </div>      
    )
}

export default ShowClickOnTitle;
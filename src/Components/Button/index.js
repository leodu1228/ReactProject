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
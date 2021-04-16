import React, {useState} from 'react';


// export default class Button extends React.PureComponent{
//     constructor(props){
//         super(props);
//         this.state = {count: 0,};
//     }

//     updateCount(){
//         this.setState( (preState, props)=>{
//             return {count: preState.count+1}
//         });
//     }

//     render(){
//         return(
//             <div> 
//                 <button onClick = {()=> this.updateCount()}>  
//                     Click{this.state.count} times
//                 </button>
//             </div>
//         )
//     }
// }


const Button = () => {
    const [currentCount, setcurrentCount] = useState(0);

    return(
        <div> 
        <button onClick = {() =>{setcurrentCount(currentCount+1)}}>  
            Click{currentCount} times
        </button>
        </div>      
    )
}

export default Button;
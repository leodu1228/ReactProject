import React, {useState} from 'react';
// // Version1: Class Component
// export default class Progress extends React.Component{
//     constructor(){
//         super()
//         this.state = {percent: "0"}
//         this.changePercent = this.changePercent.bind(this)
//     }

//     changePercent(e){
//         this.setState({percent: e})
//     }

//     render(){
//         return(
//             <div>
//                 <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//                 <div className="progress-bar" style={{backgroundColor:"#fe5196",width: this.state.percent+"%", height:"100%",borderRadius:"10px"}}></div>
//                 </div>
//                 <input placeholder="請輸入進度條比例(1~100)" onChange={(e)=>{this.changePercent(e.target.value)}}></input>
//             </div>
//         )
//     }
// }


// Version2 : func component + useState 取代 class component
const Progress = () => {
    const [Inputpercent, changePercent] = useState('')
    
    return(
        <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width: Inputpercent+"%", height:"100%",borderRadius:"10px"}}></div>
        </div>
        <input placeholder="請輸入比例(1~100)" onChange={(e)=>{changePercent(e.target.value)}}></input>
    </div>
    )

}

export default Progress;
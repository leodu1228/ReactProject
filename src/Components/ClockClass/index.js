import React from 'react';

// // Version 1
// export default class ClockClass extends React.Component{
//     constructor(props) {
//         super(props);
//         this.updateDate = this.updateDate.bind(this);
        
//         this.state = {
//           date: new Date().toLocaleTimeString(),
//         }
//         this.interval = setInterval(this.updateDate, 1000);
//       }
      
//       componentWillUnmount() {
//         clearInterval(this.interval);
//       }
      
//       updateDate() {
//         this.setState({
//           date: new Date().toLocaleTimeString(),
//         });
//       }
      
//     render(){
//         return(
//             <div>
//             <h2>ClockClass : {this.state.date}</h2>
//           </div>
//         );
//     }
// };

/*
當 prop 或 state 有變化時，就會產生更新。當一個 component 被重新 render 時，其生命週期將會依照下列的順序呼叫這些方法：

1. static getDerivedStateFromProps()  : 在render過程、生命週期、或在某個child component的constructor發生錯誤時, 會被呼叫
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()
*/


// Version 3 
export default class ClockClass extends React.Component{
  constructor(props){
  super(props);
  this.state= {time: new Date()} // 初始化 state.time的值
  }


  componentDidMount(){
   /*在建構完成後，每秒都去刷新this.state.time的值
    (1)先去宣告一個更新state內容的function
    (2)每秒去執行一次該function刷新*/
    const updateTime = () => {
      this.setState({time: new Date()})
    }
    setInterval(updateTime, 1000)
  }

  componentDidUpdate(){
    /*
    this.state被修改時會執行的函式
    */
    console.log("時間一分一秒a過去");
  }

  componentWillUnmount(){
    console.log(`ClockClass Component被移除的時間為:${this.state.time.toLocaleTimeString()}`)
    /*
    Component被移除時 會執行的函式
    */
  }

  render(){
    return <h2>ClockClass 現在時間是 : {this.state.time.toLocaleTimeString()}</h2>
  }


}    


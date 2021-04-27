import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MessageBoard from './Components/MessageBoard';
import Hooks from './Hook';

const msgData = [{ author: "招貓", time: new Date().toLocaleTimeString(), body: "有一天, 我上班#$%^^#%$(*)@#" }
  , { author: "Leo", time: new Date().toLocaleTimeString(), body: "我不想聽" }
  , { author: "Paddy", time: new Date().toLocaleTimeString(), body: "講重點" }
  , ]



// ReactDOM.render 傳入兩個參數
ReactDOM.render(
  <React.StrictMode>
      <Hooks defaultName="first click"/>
      {/* <MessageBoard messageData = {msgData}></MessageBoard> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// const removeClockClassComponent = () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }

// setTimeout(removeClockClassComponent, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

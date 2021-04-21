import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MessageBoard from './Components/MessageBoard';

// let data = [{name:'Leo',message:'阿還有沒有作業'},
//             {name:'Paddy',message:'再不交作業阿垃圾們'},
//             {name:'Kisumi',message:'再兩天啦'},]


// ReactDOM.render 傳入兩個參數
ReactDOM.render(
  <React.StrictMode>
      <MessageBoard></MessageBoard>
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

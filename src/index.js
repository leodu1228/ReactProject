import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ClockClass from './Components/ClockClass';
import ClockFunc from './Components/ClockFunc';
import Button from './Components/Button';
import Progress from './Components/Progress';

// ReactDOM.render 傳入兩個參數
ReactDOM.render(
  <React.StrictMode>
    <ClockFunc></ClockFunc>
    <ClockClass></ClockClass>
    <Progress></Progress>
    <Button></Button>
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

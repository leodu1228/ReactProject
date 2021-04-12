import React from 'react';


export default class TickClass extends React.Component{
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
        
        this.state = {
          date: new Date().toLocaleTimeString(),
        }
        this.interval = setInterval(this.updateDate, 1000);
      }
      
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
      updateDate() {
        this.setState({
          date: new Date().toLocaleTimeString(),
        });
      }
      
    render(){
        return(
            <div>
            <h2>TickClass : {this.state.date}</h2>
          </div>
        );
    }
};


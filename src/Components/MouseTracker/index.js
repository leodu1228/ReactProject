import React from 'react';

class ManLogo extends React.Component{
  render(){
    const mouse = this.props.mouse;
    return(
      <img alt= '' src="../../man.png" style={{position: 'absolute', left: mouse.x,
      top: mouse.y}}/>
    );
  }
}


class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
         {this.props.render(this.state)}
        </div>
      );
    }
  }

class MouseTracker extends React.Component{
  render(){
    return(
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse=>(
            <ManLogo mouse={mouse} /> // render props
          )}/>
      </div>
    );
  }
}

export default MouseTracker;

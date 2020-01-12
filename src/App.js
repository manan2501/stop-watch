import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class  App extends Component {
  state = {
    secondsElapsed: 0,
    MilliSecondElapsed: 0
  }
  getSeconds = () => {
    return('0' + this.state.secondsElapsed % 60).slice(-2); 
  };
  getMinutes = () => {
    return Math.floor(this.state.secondsElapsed/60);
  };
  getHour = () => {
    return Math.floor(this.state.secondsElapsed/3600);
  };

  startKaro = () => {
    this.incrementer = setInterval(() => {
      this.setState(prevState => ({
        secondsElapsed: prevState.secondsElapsed +1
      }))
    }, 1000)
  };
  bussKaro = () => {
    clearInterval(this.incrementer);
  };
  phirSeKaro = () => {
    this.setState({
      secondsElapsed: 0
    })
    clearInterval(this.incrementer);
  };
  render(){
    return (
    <div className="text-center">
      <h1>{this.getHour()}:{this.getMinutes()}:{this.getSeconds()}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Button variant="success" className="m-1"
                    onClick={this.startKaro}>Start</Button>
          </div>
          <div className="col-sm">
            <Button variant="danger" className="m-1"
                    onClick={this.bussKaro}>Stop</Button>
          </div>
          <div className="col-sm">
            <Button variant="primary" className="m-1"
                    onClick={this.phirSeKaro}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;

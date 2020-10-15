import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Clock from './Clock/Clock';

class App extends Component {
  play = true;
  switch_apm = true;

  constructor(props) {
    super(props);
    if (new Date().getUTCHours() > 12) {
      this.state = {
        hour: new Date().getUTCHours() - 12,
        minutes: new Date().getUTCMinutes(),
        seconds: new Date().getUTCSeconds(),
        apm: 'PM'
      }
    } else {
      this.state = {
        hour: new Date().getUTCHours(),
        minutes: new Date().getUTCMinutes(),
        seconds: new Date().getUTCSeconds(),
        apm: "AM"
      }
    }
    
    
  }

  tick() {
    this.setState(state => ({
      seconds: Number(state.seconds) + 1,
    }));
    if ( Number(this.state.seconds) >= 60 ) {
      this.setState(state => ({
        minutes: Number(state.minutes) + 1,
        seconds: 0,
      }));
    }
    if ( Number(this.state.minutes) >= 60 ) {
      this.setState(state => ({
        hour: Number(state.hour) + 1,
        minutes: 0,
      }));
    }
    if ( Number(this.state.hour) === 12 && 
      Number(this.state.minutes) === 0 && 
      Number(this.state.seconds) === 0
    ) {
      if (this.switch_apm === true) {
        this.setState(state => ({
          apm : ((state.apm === "AM") ? "PM" : "AM")
        }));
        this.switch_apm = false;
      }
    } else if ( Number(this.state.hour) === 13 ) {
      this.setState(state => ({
        hour: 1,
      }));
      this.switch_apm = true;
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.play === true){
        this.tick()
      }
    }, 1000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pauseClock(){
    this.play = false;
  }

  resumeClock(){
    this.play = true;
  }

  bindingHour = (event) => {
    let newHour = Number(event.target.value);
    if (newHour < 13 && newHour >= 0){
      this.setState({
        hour: newHour 
      });
    } else {
      this.setState(state => ({
        hour: state.hour
      }));
    }
  }
  bindingMinutes = (event) => {
    let newMinutes = Number(event.target.value);
    if (newMinutes < 60 && newMinutes >= 0 ){
      this.setState({
        minutes: newMinutes 
      });
    } else{
      this.setState(state => ({
        minutes: state.minutes
      }));
    }
    
  }
  bindingSeconds = (event) => {
    let newSeconds = Number(event.target.value);
    if(newSeconds < 60 && newSeconds >= 0) {
      this.setState({
        seconds: newSeconds 
      });
    } else{
      this.setState(state => ({
        seconds: state.seconds
      }));
    }
  }

  bindingAPM = (event) => {
    let newAPM = String(event.target.value);
    if(newAPM.toLocaleUpperCase() === "AM" || newAPM.toLocaleUpperCase() === "PM"){
      this.setState({
        apm: newAPM
      })
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.resumeClock();
    }
  }

  render(){
    return (
      <div className="Container">
        <h1>London Clock</h1>
        {<Clock 
            hour={this.state.hour} 
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            apm={this.state.apm}
            changeHour={(event) => {this.bindingHour(event)}}
            changeMin={(event) => {this.bindingMinutes(event)}}
            changeSec={(event) => {this.bindingSeconds(event)}}
            changeAPM={(event) => {this.bindingAPM(event)}}
            enterUp={(event) => {this.handleKeyPress(event)}}
            focus={()=>this.pauseClock()}
            blur={()=>this.resumeClock()}
            /> }
      </div>
    )
  }
}

export default App;

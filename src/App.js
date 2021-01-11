import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class Cell extends Component {
  state = {
    number: 5
  };
  render(){
    return <div 
      onClick={(e) => {
        this.setState({
          number: (this.state.number +1) % 5
        });
      }} 
      className={`cell ${this.props.isInitial ? 'initial' : ''}`}>{this.state.number !== 0 && this.state.number}</div>;
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="board">
          <Cell number={3} isInitial={true} />
          <Cell number={4} isInitial />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
        </div>
      </div>
    );
  }
}

export default App;

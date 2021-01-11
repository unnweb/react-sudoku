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
          number: (this.props.number +1) % 5
        });
      }} 
      className={`cell ${this.props.isInitial ? 'initial' : ''}`}>{this.props.number !== 0 && this.props.number}</div>;
  }
}

class Board extends Component {
  state = {
    board: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
  };
  render(){
    return (
      <div className="board">
        {
          this.state.board.map(row => 
            row.map(number => <Cell number={number} />)
        )}
      </div>
    );
  }
}
class App extends Component {
  render(){
    return (
      <div className="App">
        <Board></Board>
      </div>
    );
  }
}

export default App;

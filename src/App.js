import React, {Component} from 'react';
import './bootstrap.min.css';
import './components/displayNumbers/displayNumbers.css'
import DisplayNumbers from './components/displayNumbers/displayNumbers'

class App extends Component{

  state = {
    numbers :[]
  }

  getRandomNumber = () => {
    let numbers = [];
    while (numbers.length < 5) {
      let random = Math.floor(Math.random() *(36-5+1))+5;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    numbers.sort((a,b) => a-b);
    this.setState({numbers});
  } 

  render = () => { 
    return (
      <div className="container text-center mt-3">
        <button onClick={this.getRandomNumber} className="btn btn-secondary">New numbers</button>
        <div className="row justify-content-center">
         {this.state.numbers.map((rand, i) => <DisplayNumbers key={i} number={rand}/>)}
        </div>
      </div>
    )
  }
};

export default App;

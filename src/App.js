import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

   this.state = {
     result: ''
   }
  }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '' ) + ''
      })
    } catch (e) { 
      this.setState({
        result: "error"
      })
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  reset = () => {
    this.setState({
      result: ''
    })
  };

 render() {
   return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
            <ResultComponent result={this.state.result} />
            <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
   )
 }
}

export default App;

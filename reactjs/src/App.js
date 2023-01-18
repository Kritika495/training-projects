import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// 
//function App() {
  
//   return (
//     <div className="App">
//      <h1>My react application.</h1>
//     </div>
//   );
//}
class App extends Component{
  state = {num:0};
  increment = ()=>{
    //this.state.num++;
    this.setState({num: this.state.num+1});
    console.log(this.state);
  }
  decrement = ()=>{
    //this.state.num--;
    this.setState({num: this.state.num-1});
    console.log(this.state);
  }
  render(){
    
    return (<div style={{margin:'10px'}}>
      <h1>Reactjs Counter application.</h1>
      <h3>Value of num is {this.state.num}</h3>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>);
  }
}
export default App;

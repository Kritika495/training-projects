import React, {Component} from 'react';
export default class AppCounter extends Component{
    state={
        count: 0,
        
    }
    number = 0;
    constructor()
    {
        super();
        // this.setState({count: 1});  //not recommended
        console.log("constructor called");
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps is called.");
        return null;

    }
    render(){
        console.log("render is called.");
        return(
        <div>
            <h1>React Component LifeCycle Methods.</h1>
            <hr/>
            <h3>{this.props.title}</h3>
           <p> Counter value: {this.state.count}</p>
           <p>Number Value: {this.number}</p>
            <button class="btn btn-primary" onClick={()=>{this.setState({count: this.state.count + 1})}}>increment</button>
            <button class="btn btn-primary" onClick={()=>{this.number++;
            this.forceUpdate();
            }}>number</button>
        </div>)
    }
    shouldComponentUpdate(){
        console.log("shoulComponentUpdate() called.");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate() called.");
        return null;
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate called.")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount is called.");
        return null;
    }
    componentWillUnmount(){
        console.log("compoenent will unmount.")
    }
}
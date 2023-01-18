import React, {Component} from 'react';
import AppCounter  from './AppCounter';
export default class CounterHome extends Component{
    state={
        showHide: true
    }
    render(){
        let output = null;
        if(this.state.showHide===true)
        output = <AppCounter title = "Counter lifecycle methods"/>
        return(<div>
            <button className='btn btn-danger' onClick={()=>{this.setState({showHide: !this.state.showHide})}}>
                Show/Hide
            </button>
            <div style={{visibility:this.state.showHide?'visible':'hidden'}}>
                
                {/* <AppCounter title="Counter Lifecycle methods."/> */}
                {output}
            </div>
            </div>
        )
    }
}
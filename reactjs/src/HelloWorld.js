import React, { Component } from "react";

class HelloWorld extends Component{
    render(){
        console.log(this);
        return <div>
            <h1>Hello, World!</h1>
            <hr/>
        <p>{this.props.msg}</p>
        <p>X={this.props.x}</p>
        </div>;
    }
}
// export const HelloWorld  = (props)=>{
//     console.log(props);
//     return <div>
//         <h1>Hello, World!</h1>
//         <hr/>
//         <p>{props.msg}</p>
//         <p>x={props.x}</p>
//     </div>;
// }
export default HelloWorld;
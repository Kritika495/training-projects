import React,{ Component } from "react";
var total = 0;
class TotalSalary extends Component
{
 
    display=()=>{
        let basic =  this.props.basic
       let da =  this.props.da
       let hra = this.props.hra
       
       let res=basic+da+hra;
        this.props.fnChild(res);
    }
    
    render(){
    //    let basic =  this.props.basic
    //    let da =  this.props.da
    //    let hra = this.props.hra
       
    //    let t = (a,b,c)=>{total= a+b+c
    // console.log(total)};
       
        return <div>
            <button onClick={this.display}>Total</button>
        </div>
    }
}

export default TotalSalary;
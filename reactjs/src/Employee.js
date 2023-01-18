import React,{ Component } from "react";
import TotalSalary from "./TotalSalary";

class Employee extends Component{
    Ecode = 101;
    Ename = "Malya";
    Deptid = 111;
    basic = 30000;
    HRA = 15000;
    DA = 5000;
    //total =0;

    state={total:0}
    render(){
        return <div>
          <p>Ecode: {this.Ecode}</p>
          <p>Ename: {this.Ename}</p>
          <p>Deptid: {this.Deptid}</p>
          <p>basic: {this.basic}</p>
          <p>HRA: {this.HRA}</p>
          <p>DA: {this.DA}</p>n
          <p>Total:{this.state.total}</p>
          <TotalSalary basic={this.basic} da = {this.DA} hra= {this.HRA} fnChild={this.f1}/>
        </div>;
    }

    f1=(tot)=>{
        this.setState({total:tot});
    }


}
export default Employee;
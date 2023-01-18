import React, {Component} from "react";

export default class ContactDetails extends Component{
    state = {contact: {}}
    constructor(){
        super();
        fetch("http://localhost:4300/contacts/1").then(response=>response.json()).then(data=>this.setState({contact:data}));
    }
render(){
    //let {contact} = this.props;
    //fetch contact by id and update the state

    return (
        <div>
    <h1>Details Of Contact</h1>
    <div className="row">
        <div className="col-md-4">
            <img src={"/" + this.state.contact.picture} style={{height: '200px'}} className="img img-thumbnail"/>
        </div>
        <div className="col-md-8">
            <table className="table table-bordered">
                 <tr>
                    <td>Name</td>
                    <td>{this.state.contact.name}</td>
                    
                 </tr>
                 
                  <tr>
                    <td>Email</td>
                    <td>{this.state.contact.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{this.state.contact.phone}</td>
                  </tr>
            </table>
        </div>
    </div>

    </div>
    );
}
}
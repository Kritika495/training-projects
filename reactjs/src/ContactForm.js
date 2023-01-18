import React, {Component} from "react";
import {Navigate} from "react-router-dom";
export default class ContactForm extends Component{
    //using controlled components we use state
    state={
    name:"",
    email:"",
    phone:"",
    picture:"",
    formErrors:{
        name: 'Name is required',
        email: 'Email is required',
        phone: 'Phone is required',
        
    },
    
    errMsgs: "",
    navFlag: false
    };
    
    addNewContact = (event)=>{
        event.preventDefault();
        console.log("adding new contact")
    
        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;
        const picture = this.state.picture;
        const contact =  {name, email,phone,picture};
        console.log(contact);
        //Post request using fetch api
        
            
        
        this.state.name="";
        this.state.email="";
        this.state.phone="";
        this.state.picture="";
        //if(this.state.formErrors.name===''  && this.state.formErrors.email=='' && this.state.formErrors.phone=='')
        //alert("All is well");
        //this.checkAll();
        let {formErrors} = this.state;
        if(this.validateForm(formErrors))
        {
        //document.getElementById("err").innerHTML = "";   //this is happening in real dom so change will reflect later to reflect it to virtual dom use str in state and then 
        //alert("All is well");
        console.log(contact);
       
        fetch("http://localhost:4300/api/contacts", {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-type':'application/json;Charset=UTF-8'
            }}).then(res=>res.json())
            .then(data=>{console.log(data)
            this.setState({navFlag: true});
            }
            );

        }
        // else
        // {
        //   let p = Object.values(formErrors);
        //   console.log(p);
        //   let str = "<ul>";
        //   p.forEach(e=>{
        //     if(e.length!=0)
        //     str+= "<li>" + e + "</li>"
        //   });
        //   str+= "</ul>"
        //   document.getElementById("err").innerHTML = str;
        // }
        let errMsgs = Object.values(formErrors).map((err)=>err.length===0?null:<li>{err}</li>);
        this.setState({errMsgs});
        
    };
    checkAll = ()=>{
        let {formerr} = this.state.formErrors;
        let p = Object.keys(formerr);
        console.log(p);
        let n = p.length;
        let c = 0;
        
        //for(let i=0; i<n; i++)
        //{
        //    if(p[]=='')
         //   c++;
       // }
       // p.forEach(i=>{});
        console.log(c);
        if(c==n)
        alert("All is well");
       
    };
    //validate all fields
    validateForm(formErrors){
        let valid = true;
        //check the error messages
        Object.values(formErrors).forEach(err=>valid= valid && err.length===0);   //previous valid and current  check
        return valid;

    }
      tfHandler = (event)=>{
       
        // console.log(event.target.value);
        // let value = event.target.value;
        // this.setState({[ event.target.name]: value});
        let {name, value} = event.target;         //object desctructuring
        let {formErrors} = this.state;
        switch(name){
            case 'name':
            if(!value || value.length===0)
            {
               formErrors.name = "Name is required";
            }
            else if(value.length<3 || value.length>20)
            {
                formErrors.name = "Name must be betweeen 3 and 20 letters"
            }
            else
            {
                formErrors.name=''
            }
            console.log(formErrors);
            break;
        case 'email':
            if(!value || value.length===0)
            {
            formErrors.email = 'Email is required'
            }
            else if(!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            {
            formErrors.email = 'Not a valid email'
            }
            else
            {
                formErrors.email = ''
            }
            break;
        case 'phone':
            if(!value || value.length===0)
            {
                formErrors.phone = 'Phone is required';
            }   
            else if(!value.match(/^\d{10,12}$/)) 
            {
                formErrors.phone = 'Not a valid phone';
            }
            else
            {
                formErrors.phone = '';
            }
            default:
                break;

        }
        this.setState({[name]: value, formErrors: formErrors});
      };  
    render(){
        if(this.state.navFlag)
        return (<Navigate to="/view-all-contacts"/>);
        return <div>
            {/* <h3>Current state</h3> */}
            {/* <pre>{JSON.stringify(this.state, null, 3)}</pre> */}
            <h3>Add a new contact.</h3>
            
            <form className="form" onSubmit={this.addNewContact}>
                <div className="form-group row">
                    <label className="control-label col-md-4">Name</label>
                    <div className="col-md-8">
                    <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.tfHandler}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="control-label col-md-4">Email</label>
                    <div className="col-md-8">
                    <input name="email" type="text" className="form-control" value={this.state.email} onChange={this.tfHandler}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="control-label col-md-4">Phone</label>
                    <div className="col-md-8">
                    <input  name="phone" type="text" className="form-control" value={this.state.phone} onChange={this.tfHandler}/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="control-label col-md-4">Picture</label>
                    <div className="col-md-8">
                    <input name="picture" type="text" className="form-control" value={this.state.picture} onChange={this.tfHandler}/>
                    </div>
                </div>
                <button className="btn btn-primary">Save data</button>
            </form>
            <ul >
               {this.state.errMsgs}
            </ul>
        </div>
    }
}
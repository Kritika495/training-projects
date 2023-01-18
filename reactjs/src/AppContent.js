import React, {Component} from "react";
import './AppContent.css';
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import  ContactList  from "./ContactList";
import ContactDetails from "./ContactDetails";
import ContactDetailsHooks from "./ContactDetailsHooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AxiosApiCalls from "./AxiosApiCalls";
const contact = {
    name: 'Alexa',
    email: 'alexa@amazon.com',
    phone: '9876543212',
    picture: 'alexa.jpg'
};
// const contacts = [
//     {
//         id:1,
//         name: 'Alexa',
//         email: 'alexa@amazon.com',
//         phone: '9876543212',
//         picture: 'alexa.jpg'
//     },
//     {
//     id:2,
//     name: 'Siri',
//     email: 'siri@apple.com',
//     phone: '9876543212',
//     picture: 'alexa.jpg'
//     },
//     {
//     id:3,
//     name: 'Alex',
//     email: 'alex@amazon.com',
//     phone: '9776543212',
//     picture: 'alexa.jpg'
// },
// {
// id:4,
// name: 'Rose',
// email: 'rose@amazon.com',
// phone: '7876543212',
// picture: 'alexa.jpg'
// }
// ];  
  // const contactCards = contacts.map(c=><ContactCard contact={c}/>);
  //let contacts = [];
 
  const Home = (props)=>{
    return <div>
        <h3>Welcome to Addressbook Application</h3>
        <hr/>

    </div>
}
export class AppContent extends Component{
    // state={contacts: []};
      x = 100;
     show() {
          document.getElementsByClassName("t").style.visibility = "visible";
         console.log(this.x);
     }
    // constructor(){
    //     super();
    //     fetch("http://localhost:4300/api/contacts").then(response=>response.json()).then(data=>this.setState({contacts:data}));
    //     this.show = this.show.bind(this);
    // }
    // show = ()=>{console.log(this.x)};
    render(){
       
        return <Router><div className="app-content container">
          
           <div className="row">
            <div className="col-md-4">
                <ul>
                    <li className="list-group-item"><Link to="/">Home</Link></li>
                    <li className="list-group-item"><Link to="/add-new-contact">Add a new contact</Link></li>
                    <li className="list-group-item"><Link to="/view-all-contacts">View All contacts</Link></li>

                </ul>
            </div>
            <div className="col-md-8">
                <Routes>
                    <Route path="/" exact element={<AxiosApiCalls/>}/>
                    <Route path="/add-new-contact" exact element={<ContactForm/>}/>
                    <Route path="/view-all-contacts" exact element={<ContactList />}/>
                    <Route path="/contact-details/:id" exact element={<ContactDetailsHooks/>}/>
                </Routes>
                
            </div>
           </div>
           
          
        </div></Router>
    }
}
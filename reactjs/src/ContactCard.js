import  React from "react";
import {Link} from "react-router-dom";
const d= ()=>{
    
};
 const ContactCard = ({contact,deleteByContactId})=>{
return(
<div className="card">
    <div className="row" style={{width:'400px', padding:'10px',margin:'10px'}}>
         <div className="col-md-4">
            <img src={"/" + contact.picture} width='100px' height='100px' className="card-img"/>
             
         </div>
         <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><Link to={"/contact-details/" + contact.id}>{contact.name}</Link></h5>
                <div className="card-text">{contact.email}</div>
                <div className="card-text">{contact.phone}</div>
                <br/>
                <button className="btn btn-danger" onClick={()=>{deleteByContactId(contact.id)}}>Delete</button>
            </div>
         </div>
    </div>
</div>
);
}
export default ContactCard;
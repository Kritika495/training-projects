import React, { Component } from 'react';
import ContactCard from './ContactCard';
export default class ContactList extends Component {
    state = { contacts: [] };

     refresh = async () => {
      try{ let response= await fetch("http://localhost:4300/api/contacts")
       let data= await response.json()
       this.setState({ contacts: data });
     }
     catch(err)
    {
        console.log(err);
    }
    }

    
    constructor() {
        super();
        // this.show = this.show.bind(this);
        
    }
    componentDidMount(){
        this.refresh();
    }
    deleteByContactId = (id) => {
        fetch("http://localhost:4300/api/contacts/" + id, {
            method: 'DELETE'
        }).then(response => response.json()).then((data) => {
            alert("Record deleted for id: " + data.id);
            this.refresh();
        });
    }

    render() {
        return (
            <div>
                <h1 className=" alert alert-info">List </h1>
                {this.state.contacts.map(c => <ContactCard key={c.id} contact={c} deleteByContactId={this.deleteByContactId} />)}

            </div>
        )
    }
}
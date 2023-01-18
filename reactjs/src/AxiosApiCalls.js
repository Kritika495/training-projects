import React from 'react';
import axios from 'axios';
//import { response } from 'express';
import ContactCard from './ContactCard';
import { useState, useEffect } from 'react';
const baseUrl = "http://localhost:4300/api/contacts";
const AxiosApiCalls = ()=>{
    const [contacts, setContacts] = React.useState([]);

    useEffect(()=>{
        axios.get(baseUrl).then(response=>{
            console.log(response.data);
            setContacts(response.data);
            console.log("useEffect is called");
           
        })
    }, []);
    
    useEffect(()=>{
        axios.post(baseUrl,{
            name:'Ravi',
            email:'ravi99@gmail.com',
            phone: '1234567890',
            picture:'1.jpg'    
        }).then(response=>{
            let c=contacts;
            c.push(response.data);
            setContacts(c);
        })
    }, []);
    if(contacts){
        return (
        
        <div>
            <h1 className='alert alert-info'>List of Contacts</h1>
            {contacts.map(c=><ContactCard key={c.id} contact={c}/> )}
        </div>);

    }
    }
  export default AxiosApiCalls;

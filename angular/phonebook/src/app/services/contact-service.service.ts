import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/map';
const baseurl = "http://localhost:3000/api/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
contacts: Contact[] = [];
  constructor(private http: HttpClient ) { 
    
  }

  getContactDetails(id:number = 1):Observable<Contact>{
    //let c: Contact = new Contact(0, "", "","", "", "","", "", "", "", "");
    //for(let i=0; i<this.contacts.length; i++)
    //{
    //  if(id==this.contacts[i].id)
     // {
      //  c= this.contacts[i];
      //  break;
      //}
    //}
    return this.http.get<Contact>(baseurl + "/" + id);
  }

  getAllContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(baseurl);
    }
    
    addContact(contact:Contact): Observable<Contact>
    {
      //this.contacts.push(contact);
      return this.http.post<Contact>(baseurl, contact);

    }
    updateContact(contact : Contact)
    {
      //for(let i=0; i<this.contacts.length; i++)
      //{
       // if(contact.id==this.contacts[i].id)
        //{
        //  this.contacts[i] = contact;
        //  break;
       // }
       return this.http.put<Contact>(baseurl + "/" + contact.id, contact);
      }
      deleteContact(id:number): Observable<Contact>{
        return this.http.delete<Contact>(baseurl + "/" + id);
      }
    }


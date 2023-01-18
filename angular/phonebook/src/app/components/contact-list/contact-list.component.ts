import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
contacts: Contact[] = [];
 constructor(private contactService:ContactServiceService){}

  ngOnInit(): void {
    //access the route parameter
   this.contactService.getAllContacts().subscribe(data=>{this.contacts=data});
  }
male() : number
{
  let n:number;
  n=0;
  for(let i=0; i<this.contacts.length; i++){
    if(this.contacts[i].gender=="Male")
    n++;
  }
  return n;

}

female(): number
{
  let n: number;
  n = 0;
  for(let i=0; i<this.contacts.length; i++)
  {
    if(this.contacts[i].gender=="Female")
    n++;

  }
  return n;
}
//deleteContact(id: number)
//{
 // for(let i=0; i<this.contacts.length; i++)
  //{
   // if(this.contacts[i].id==id)
   // {
     // this.contacts.splice(i, 1);
     // break;
   // }


  //}
//}
reload(msg : string)
  {
   this.contactService.getAllContacts().subscribe(data=>{this.contacts = data;});
  }
}


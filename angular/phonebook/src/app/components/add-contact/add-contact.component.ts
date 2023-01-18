import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact(0, "", "", "", "","", "", "", "", "", "");
  
  constructor(private contactService: ContactServiceService, private router: Router) { }

  ngOnInit(): void {
  }
addContact()
{
  //this.contactService.addContact(this.contact);
  this.contactService.addContact(this.contact).subscribe(res=>{
    this.router.navigate(["/contact-list"]);
  });
}
}

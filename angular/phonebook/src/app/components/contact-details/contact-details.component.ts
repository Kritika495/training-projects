import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
contact:Contact = new Contact(0,"", "", "", "", "", "", "", "", "", "");
  constructor(private contactService : ContactServiceService) { 

  }

  ngOnInit(): void {
    this.contactService.getContactDetails(1).subscribe(data=>this.contact=data);
    ///this.contact = this.contactService.getContactDetails(1);
    //this.contact.id = 1;
    //this.contact.firstname= "Kritika";
    //this.contact.lastname="Kashyap";
    //this.contact.gender = "Female";
    //this.contact.phone = "7807362651";
    //this.contact.city = "Kullu";
    //this.contact.state = "Himachal Pradesh";
    //this.contact.country = "India";
    //this.contact.dob = "29/10/1999"
  }

}

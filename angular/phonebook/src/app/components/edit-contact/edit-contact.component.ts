import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
editform?: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private contactService: ContactServiceService) {
    
   }

  ngOnInit(): void {
    //access the route parameter
    let id : number = 0;
    this.activatedRoute.params.subscribe(paramsData=>{
      console.log(paramsData["id"]);
       id = paramsData["id"];

       this.contactService.getContactDetails(id).subscribe(data=>{
        let contact = data as Contact;
        this.editform = new FormGroup(
          {
            id: new FormControl(contact.id, Validators.required),
            firstname: new FormControl(contact.firstname, Validators.required),
            lastname: new FormControl(contact.lastname, Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(10)
            ])),
            dob: new FormControl(contact.dob, Validators.required),
            gender: new FormControl(contact.gender, Validators.required),
            phone: new FormControl(contact.phone, Validators.required),
            email: new FormControl(contact.email, Validators.email),
            city: new FormControl(contact.city, Validators.required),
            state: new FormControl(contact.state, Validators.required),
            country: new FormControl(contact.country, Validators.required),
            picture: new FormControl(contact.picture, Validators.required),
          });
        
      });
      });
    };
    
    
  saveContact(contact:Contact)
  {
    //this.contactService.updateContact(contact);
    //console.log(contact);
   //this.router.navigate(["/contact-list"]);
   this.contactService.updateContact(contact).subscribe(res=>{
    this.router.navigate(["/contact-list"]);
   });
  }

}

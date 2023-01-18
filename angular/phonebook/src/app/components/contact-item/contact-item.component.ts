import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input()
  contact?:Contact;

  @Output()
  onReload: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router, private contactService: ContactServiceService) { }

  ngOnInit(): void {
  }
  deleteContact(id: number)
  {
    this.contactService.deleteContact(id).subscribe(data=>{
    //  this.router.navigate(["/contact-list"]);
    this.onReload.emit("Record deleted");
    });
  }
  
  //  reload()
  //  {
  //   this.contactService.getAllContacts().subscribe(data=>{this.contacts = data;});
  //  }
  
  }


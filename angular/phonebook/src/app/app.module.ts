import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { TitlePipe } from './pipes/title.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { CounterComponent } from './components/counter/counter.component';
//add routes
const routes:Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path:"home",
    component:ContactDetailsComponent
  },
  {
    path:"contact-list",
    component: ContactListComponent
  },
  {
    path: "contact-details",
    component: ContactDetailsComponent
  },
  {
    path: "add-contact",
    component: AddContactComponent
  },
  {
    path: "edit-contact/:id",
    component: EditContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
    TitlePipe,
    ContactItemComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

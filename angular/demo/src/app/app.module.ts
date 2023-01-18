import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeItemComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMembersComponent } from './view-members/view-members.component';
import { AddMembersComponent } from './add-members/add-members.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMembersComponent,
    AddMembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular it's split up into different modules or sub-packages
// Also, tells angular which pieces belongs to our app.
// Furhter, we need to import the package not for angular but for TypeScript(ts) since it needs to know from where the package comes from
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // imports features for Angular
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

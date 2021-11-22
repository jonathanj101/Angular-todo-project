import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular it's split up into different modules or sub-packages
// Also, tells angular which pieces belongs to our app.
// Furhter, we need to import the package not for angular but for TypeScript(ts) since it needs to know from where the package comes from
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// importting server component for TypeScript
import { ServerComponent } from './server/server.component';

@NgModule({
  // By default, Angular does not know about new components even though it builds the folders/files. We need to import it.
  declarations: [
    AppComponent,
    ServerComponent,
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

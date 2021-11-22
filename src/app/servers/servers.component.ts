import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  // creating a new methon. Not necessarily needs 'on' but for readability and understading purposes is easier.
  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }
  onUpdateServerName(event:Event) {
    console.log(event)
    // this.serverName = event.target.value;
    // This is used to prevent TypeScript Lint warning/error since we're getting an HTML event
    // we can explicitly inform it about the type in TypeScript by adding HTML input element here
    // in front of it, like this
    // and again this is just needed to inform TypeScript that we know that the type of the HTML element of
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

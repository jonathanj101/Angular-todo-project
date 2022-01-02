import { Component } from "@angular/core";

// decorator to enhance the component.
// configuring the decorator
@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})
export class ServerComponent {
    // defining properties (TypeScript difining) to be use in the component
    // TypeScript defining variable, the value has to be declared either number, string, etc
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus =  Math.random() > 0.5 ? "online" : "offline";
    }

    // defining a method in TypeScript
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? 'green' : "red";
    }
}
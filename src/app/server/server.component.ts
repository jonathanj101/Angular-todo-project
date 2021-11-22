import { Component } from "@angular/core";

// decorator to enhance the component.
// configuring the decorator
@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    // defining properties (TypeScript difining) to be use in the component
    // TypeScript defining variable, either string, number etc has to be declared or say it
    serverId: number = 10;
    serverStatus: string = "offline";

    // defining a method in TypeScript
    getServerStatus() {
        return this.serverStatus;
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= "No server was created";
  serverName = 'test server';
  username= '';
  serverCreated = false;
  servers=['testServer','testServer2']
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName)
    this.serverCreated=true;
  }

  onUpdateServerName(e:Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }
  
  changeUserName(e:Event){
    this.username = '';
  }

}

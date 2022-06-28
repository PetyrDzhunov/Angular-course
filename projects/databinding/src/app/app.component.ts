import { Component } from '@angular/core';
import { ServerElement } from './shared/serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : ServerElement[] = [{type:"server",name:"Testserver",content:"Just a test"}];

}

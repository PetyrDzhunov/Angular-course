import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersActivated : boolean = false;
  constructor(private usersService :UserService) {}

  ngOnInit() {
    this.usersService.activatedEmitter.subscribe(
      (didActivate:boolean) => {
        this.usersActivated = didActivate;
      }
    )
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('f') signUpForm :NgForm
  defaultQuestion = "pet"
  answer = "";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(ngForm : NgForm) {
    const {username,email,secret} = ngForm.value;
    console.log(username,email,secret)
  }

  // onSubmit() {
  //   console.log(this.signUpForm );
  // }


}

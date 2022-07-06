import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private firstObsSubrscription :Subscription
  constructor() { }

  ngOnInit() {
    // this.firstObsSubrscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customIntervalObservable = new Observable(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++
        },1000)
      }
    ) 

    this.firstObsSubrscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubrscription.unsubscribe()
    
  }

}

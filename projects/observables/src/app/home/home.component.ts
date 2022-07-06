import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
          if(count > 3) {
            observer.error(new Error('Count is greater than 3 !'));
          };
          if(count > 2) {
            observer.complete()
          }
          count++
        },1000)
      }, 
    ) 

    this.firstObsSubrscription =  customIntervalObservable.pipe(map((data) => {
      return 'Round: ' + (data as number +1)
    }))
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => console.log('completed')
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubrscription.unsubscribe()
    
  }

}

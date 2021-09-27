import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import {filter, map} from 'rxjs/Operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription | undefined;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


  //   this.firstObsSubscription =  customIntervalObservable.pipe(map((data:number)=>{
  //     return "Round "+(data+1)
  //  }))
  this.firstObsSubscription =  customIntervalObservable.pipe(filter((data : number)=>  data % 2===0),
  map((data:number)=>{
    return "Round "+(data+1)
 }))
  .subscribe((data: number) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }

}


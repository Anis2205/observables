import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activateservice } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activated  = false
  mysubsciption : Subscription | undefined
  constructor(private userservice : Activateservice){
  }

  ngOnInit(): void {
    this. mysubsciption = this.userservice.activeemitter.subscribe(
      capturing => {
        this.activated = capturing
      }
    )
  }
  ngOnDestroy():void {
    this.mysubsciption?.unsubscribe()
    
  }
}

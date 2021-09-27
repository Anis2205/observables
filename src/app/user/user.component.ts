import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activateservice } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id : number | undefined

  constructor(private route:ActivatedRoute,
    private userservice : Activateservice) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params.id
        console.log(this.id)
      }
    )
  }

  activating(){
      //  this.userservice.activeemitter.emit(true)
      this.userservice.activeemitter.next(true)
  }

}

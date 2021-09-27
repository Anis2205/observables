import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class Activateservice {
    // activeemitter = new EventEmitter<boolean>()
    activeemitter = new Subject<boolean>()
}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";


const approutes : Routes = [
    {path:'',component:HomeComponent},
    {path:'user/:id',component:UserComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})

export class Approute{

}
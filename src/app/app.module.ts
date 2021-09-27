import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Approute } from './app-route.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Activateservice } from './user.service';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    Approute
  ],
  providers: [Activateservice],
  bootstrap: [AppComponent]
})
export class AppModule { }

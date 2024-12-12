import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path:"", component:LogInComponent},
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "createrequest", component: TravelRequestComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

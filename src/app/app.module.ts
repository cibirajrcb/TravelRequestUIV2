import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CommonService } from './Service/common.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { ApproveTravelRequestComponent } from './travel-request/approve-travel-request/approve-travel-request.component';
import { ModelPopUpComponent } from './model-pop-up/model-pop-up.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    TravelRequestComponent,
    LogInComponent,
    ApproveTravelRequestComponent,
    ModelPopUpComponent,
    ExpensesComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

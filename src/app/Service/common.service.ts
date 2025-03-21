import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  BaseUrl = "https://localhost:7117/api/";

  constructor(public http:HttpClient) { }
  isApproverRole = false;

  get isApprover(){
    let val = sessionStorage.getItem("isApprover");
    this.isApproverRole = JSON.parse(val || "false");
    return this.isApproverRole;
  }
  set isApprover(value){
    this.isApproverRole = value;
    sessionStorage.setItem("isApprover",value?.toString()|| "");

  }

  getDetails(){
    this.http.get("");
  }


  saveUser(request: any) {
    return this.http.post(this.BaseUrl + "User/SaveUser", request);
  }

  getAllUser() {
    return this.http.get(this.BaseUrl + "User/GetAllUser");
  }

  saveTravelRequest(request: any) {
    return this.http.post(this.BaseUrl + "TravelRequest/SaveTravelRequest", request);
  }

  getAllTravelRequest() {
    return this.http.get(this.BaseUrl + "TravelRequest/GetAllTravelRequest");
  }

  sendEmailNotification(request:any) {
    return this.http.post(this.BaseUrl + "TravelRequest/SendEmail", request);
  }

  approveORRejectTravelRequest(request:any){
    return this.http.post(this.BaseUrl + "TravelRequest/ApproveOrRejectTravelRequest", request);
  }

  getAllPayments() {
    return this.http.get(this.BaseUrl + "TravelRequest/GetAllPayments");
  }

  savePaymentRequest(request: any) {
    return this.http.post(this.BaseUrl + "TravelRequest/SavePayment", request);
  }

  getAllExpenses() {
    return this.http.get(this.BaseUrl + "TravelRequest/GetAllExpenses");
  }

  saveExpensesRequest(request: any) {
    return this.http.post(this.BaseUrl + "TravelRequest/SaveExpenses", request);
  }

}


export interface userModel{
  Name:string,
  Email:string,
  DepartmentID: number;
  RoleID: number;

}

export interface EmailRequest {
  Subject: string,
  Body: string,
  Attachments: any,
  ToEmail: string
}

export const Departments = [
  {value:1,description:'IT'},
  {value:2,description:'HR'},
  {value:3,description:'Finance'},
  {value:4,description:'Operations'},
  {value:5,description:'Maintanence'}
]

export const Roles = [
  {value:5,description:'Traine'},
  {value:1,description:'Tram Leader'},
  {value:2,description:'Manager'},
  {value:3,description:'Sr.Manager'},
  {value:4,description:'Delivery Head'}

]

export const PaymentStatus = [
  {value:1,description:'Paid'},
  {value:2,description:'Not Paid'},
  {value:3,description:'Rejected'}
]

export const ExpenseType = [
  {value:1,description:'Meals'},
  {value:2,description:'Air Fare'},
  {value:3,description:'Travel fare'},
  {value:4,description:'Accommodation fee'},
  {value:5,description:'Others'}
]



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  BaseUrl = "https://localhost:7117/api/"

  constructor(public http:HttpClient) { }

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

}


export interface userModel{
  Name:string,
  Email:string,
  DepartmentID: number;
  RoleID: number;

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

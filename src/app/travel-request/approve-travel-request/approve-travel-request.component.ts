import { Component, Input, OnInit } from '@angular/core';
import { CommonService, EmailRequest } from '../../Service/common.service';

@Component({
  selector: 'app-approve-travel-request',
  standalone: false,
  
  templateUrl: './approve-travel-request.component.html',
  styleUrl: './approve-travel-request.component.scss'
})
export class ApproveTravelRequestComponent implements OnInit {
  constructor(public commonService: CommonService){

  }


  travelRequestData : any =[];

  ngOnInit(): void {
    this.GetAllTravelRequest();
  }

  GetAllTravelRequest() {
    if (this.commonService.isApprover) {
      this.commonService.getAllTravelRequest().subscribe((response: any) => {
        console.log('all request', response);
        this.travelRequestData = response?.data;
        console.log('all request approver', this.travelRequestData);
      });
    }

  }

  Approve(data:any){
    let req = this.getEmailRequest(data,"Approved");
    this.commonService.sendEmailNotification(req).subscribe((res:any)=>{
      if(res?.data){
        alert("Request Approved Successfully");

      }
    })

  }

  Reject(data:any){
    console.log("input data", data);
    let req = this.getEmailRequest(data,"Rejected");
    this.commonService.sendEmailNotification(req).subscribe((res:any)=>{
      if(res?.data){
        alert("Request Rejected Successfully");
      }
    })
   
  }

  getEmailRequest(data:any, status:string){
    
      let bodyhtml = `<style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      </style>
      <h2>Travel Request Detail</h2> 
      <table> 
      <tr> <td>User ID : </td> <td>${data.userID}</td> </tr>
      <tr> <td>Request Origin : </td> <td>${data.origin}</td> </tr> 
      <tr> <td>Request Destination : </td> <td>${data.destination}</td> </tr>
      <tr> <td>Start Date : </td> <td>${data.startDate}</td> </tr> 
      <tr> <td>End Date : </td> <td>${data.endDate}</td> </tr>
      <tr> <td>Purpose : </td> <td>${data.purpose}</td> </tr>
      <tr> <td>Status : </td> <td>${status.toUpperCase()}</td> </tr>
      </table>`
      let request :EmailRequest = {
        Body : bodyhtml,
        Subject : `${status.toUpperCase()} Travel Request Notification`,
        Attachments : null,
        ToEmail : "vickyvin955@gmail.com"
      }     
      return request;
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService, Departments, Roles } from '../Service/common.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-travel-request',
  standalone: false,
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.scss']
})
export class TravelRequestComponent {

  travelForm!: FormGroup;
  public isShowAll = false;
  public isCreateTravelRequest = false
  public userData:any= [];
  public travelRequestData:any= [];

  public departmentsData = Departments;
  public roleData = Roles

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.travelForm = this.fb.group({
      UserID: ['', Validators.required],
      Origin: ['', [Validators.required, Validators.email]],
      Destination: ['', [Validators.required]],
      StartDate:['', Validators.required],
      EndDate:['', Validators.required],
      Purpose:['', Validators.required],
    });

    if(this.userData?.length === 0){
      this.getAllUsers();
    }

  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('FORM VALUE', form.value)
    var request = this.createTravelRequest(form);
    this.commonService.saveTravelRequest(request).subscribe(response => {

      alert(JSON.stringify(response));
      alert("Traveler Saved");

    })
  }

  createTravelRequest(form: FormGroup){
    let request = {
      UserID : form.value.UserID,
      Origin : form.value.Origin,
      Destination : form.value.Destination,
      StartDate : form.value.StartDate,
      EndDate : form.value.EndDate,
      Purpose : form.value.Purpose,
      Status : 'InProgress',
      CreatedBy : "Admin",
      CreatedDate : new Date()


    }

    return request;
  }

  Clear(){
    this.travelForm.reset();
  }

  AddTravelRequest(){
    this.isShowAll = true;
    this.isCreateTravelRequest = false;

  }

  ShowAllTravelRequest(){
    this.isShowAll = false;
    this.isCreateTravelRequest = true;
    this.commonService.getAllTravelRequest().subscribe((response:any)=>{
      console.log('all user', response);
      this.travelRequestData = response?.data
      console.log('user data', this.travelRequestData);
    })
    
  }

  getAllUsers(){
    this.commonService.getAllUser().subscribe((response:any)=>{
      console.log('all user', response);
      this.userData = response?.data
      console.log('user data', this.userData);
    })
  }


}

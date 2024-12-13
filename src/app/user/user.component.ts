import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CommonService,
  Departments,
  Roles,
  userModel,
} from '../Service/common.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  public isShowAll = false;
  public isCreateUser = false;
  public userData: any = [];
  public departmentsData = Departments;
  public roleData = Roles;

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      role: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('FORM VALUE', form.value);
    var request = this.createUserRequest(form);
    this.commonService.saveUser(request).subscribe((response) => {
      alert(JSON.stringify(response));
      alert('User Saved');
    });
  }

  createUserRequest(form: FormGroup) {
    let request = {
      Name: form.value.name,
      Email: form.value.email,
      DepartmentID: form.value.department,
      RoleID: form.value.role,
      CreatedDate: new Date(),
      CreatedBy: 'Admin',
    };

    return request;
  }

  Clear() {
    this.userForm.reset();
  }

  AddNewUser() {
    this.isShowAll = false;
    this.isCreateUser = true;
  }

  ShowAllUser() {
    this.isShowAll = true;
    this.isCreateUser = false;
    this.commonService.getAllUser().subscribe((response: any) => {
      console.log('all user', response);
      this.userData = response?.data;
      console.log('user data', this.userData);
    });
  }
}

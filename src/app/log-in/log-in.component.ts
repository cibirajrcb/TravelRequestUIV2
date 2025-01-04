import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-log-in',
  standalone: false,
  
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private commonService:CommonService){

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      userName : ['', Validators.required],
      password : ['',Validators.required]

    })
    sessionStorage.removeItem("isApprover");
    
  }

  


  logIn(loginForm:FormGroup){
    if(loginForm.valid){
      if(loginForm.value.userName === 'admin' && loginForm.value.password == 12345 ){
        this.commonService.isApprover = true;
        this.router.navigate(['/home']);
      }  
      else if(loginForm.value.userName === 'user' && loginForm.value.password == 12345 ){
        this.commonService.isApprover = false;
        this.router.navigate(['/home']);
      } 
      else{
        alert('User Not Found');
      } 
    }
    else{
      alert('please enter username / password')
    }


  }

}

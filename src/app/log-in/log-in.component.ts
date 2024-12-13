import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: false,
  
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private router:Router){

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      userName : ['', Validators.required],
      password : ['',Validators.required]

    })
    
  }

  


  logIn(loginForm:FormGroup){
    if(loginForm.valid){
      if(loginForm.value.userName === 'admin' && loginForm.value.password == 12345 ){
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

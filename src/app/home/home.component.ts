import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public arrNames=["Ajith","Vijay","Surya"]

  constructor(){
    debugger;
    console.log('names', this.arrNames);
  }
 
   
}

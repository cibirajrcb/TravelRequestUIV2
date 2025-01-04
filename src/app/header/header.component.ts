import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isApprover = false;
  constructor(public commonService:CommonService){

  }

  ngOnInit(): void {
    this.isApprover = this.commonService.isApprover;
    console.log("this.commonService.isApprover",this.commonService.isApprover)
    
  }


}

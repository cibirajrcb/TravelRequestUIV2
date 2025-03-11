import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-model-pop-up',
  standalone: false,
  
  templateUrl: './model-pop-up.component.html',
  styleUrl: './model-pop-up.component.scss'
})
export class ModelPopUpComponent {

  constructor(){

  }
  RejectComments : string = '';
  displayStyle : string = 'none';

  @Output() ReviewComments = new EventEmitter<string>();
  @Input() showPopup = false;


  closePopup() { 
    this.showPopup = false; 
  } 
  submitPopup(){

    this.ReviewComments.emit(this.RejectComments);

  }
}

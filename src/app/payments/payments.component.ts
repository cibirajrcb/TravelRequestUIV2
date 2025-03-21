import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CommonService, PaymentStatus } from '../Service/common.service';

@Component({
  selector: 'app-payments',
  standalone: false,
  
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  constructor(private fb: FormBuilder, private commonService: CommonService){

  }

  paymentForm!: FormGroup;
  public isShowAll = false;
  public isCreatePayment = false;
  public paymentData: any = [];
  public expenseData: any = [];
  public paymentStatus = PaymentStatus;
  //public travelRequestData = Departments;
  //public travelRequestData = Roles;

  ngOnInit() {
    this.paymentForm = this.fb.group({
      expenseId: ['', Validators.required],
      amountPaid: ['', [Validators.required, Validators.email]],
      paymentDate: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]]
    });
    this.GetExpensesData();
  }

  GetExpensesData(){
    this.commonService.getAllExpenses().subscribe((response: any) => {
      console.log('all expenses', response);
      this.expenseData = response?.data;
      console.log('travel req data', this.expenseData);
    });
  }


  AddNewPayment(){
    this.isShowAll = false;
    this.isCreatePayment = true;

  }

  ShowAllPayments(){
    this.isShowAll = true;
    this.isCreatePayment = false;
    this.commonService.getAllPayments().subscribe((response: any) => {
      console.log('all payments', response);
      this.paymentData = response?.data;
      console.log('payment data', this.paymentData);
    });

  }

  Clear(){
    this.paymentForm.reset();

  }

  onSubmit(paymentForm:FormGroup){
    console.log('paymentForm', paymentForm);
    let paymentRequest = {
      expenseID: paymentForm.value.expenseId,
      amountPaid: paymentForm.value.amountPaid,
      paymentDate: paymentForm.value.paymentDate,
      paymentStatus: paymentForm.value.paymentStatus,
      createdDate: new Date(),
      createdBy: "Admin",
    }
    this.commonService.savePaymentRequest(paymentRequest).subscribe((response) => {
      alert(JSON.stringify(response));
      alert('Payment Saved');
    });

  }

}

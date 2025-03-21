import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService, ExpenseType } from '../Service/common.service';

@Component({
  selector: 'app-expenses',
  standalone: false,

  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {

  constructor(private fb: FormBuilder, private commonService: CommonService) {

  }

  expenseForm!: FormGroup;
  public isShowAll = false;
  public isCreateExpense = false;
  public expenseData: any = [];
  public travelRequestData: any = [];
  public expenseTypes = ExpenseType;


  ngOnInit() {
    console.log('ExpenseType',ExpenseType);
    this.expenseForm = this.fb.group({
      travelTequestId: ['', Validators.required],
      expenseType: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required]],
      description: ['', Validators.required],
      expenseDate: ['', Validators.required]
    });

    this.GetTravelRequestData();
  }

  GetTravelRequestData(){
    this.commonService.getAllTravelRequest().subscribe((response: any) => {
      console.log('all travel request', response);
      this.travelRequestData = response?.data;
      console.log('travel req data', this.travelRequestData);
    });
  }
  AddNewExpense() {
    this.isShowAll = false;
    this.isCreateExpense = true;
  }

  ShowAllExpenses() {
    this.isShowAll = true;
    this.isCreateExpense = false;
    this.commonService.getAllExpenses().subscribe((response: any) => {
      console.log('all expenses', response);
      this.expenseData = response?.data;
      console.log('expenses data', this.expenseData);
    });

  }

  Clear() {
    this.expenseForm.reset();
  }

  onSubmit(expenseForm: FormGroup) {
    console.log('expenseForm', expenseForm);
    let expenseRequest = {
      requestID: expenseForm.value.travelTequestId,
      expensesType: expenseForm.value.expenseType,
      amount: expenseForm.value.amount,
      date: expenseForm.value.expenseDate,
      description: expenseForm.value.description,
      createdDate: new Date(),
      createdBy: 'Admin'
    }
    this.commonService.saveExpensesRequest(expenseRequest).subscribe((response) => {
      alert(JSON.stringify(response));
      alert('Expense Saved');
    });

  }

}

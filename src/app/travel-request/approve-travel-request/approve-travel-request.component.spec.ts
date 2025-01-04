import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTravelRequestComponent } from './approve-travel-request.component';

describe('ApproveTravelRequestComponent', () => {
  let component: ApproveTravelRequestComponent;
  let fixture: ComponentFixture<ApproveTravelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveTravelRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveTravelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

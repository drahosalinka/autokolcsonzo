import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDoneComponent } from './borrow-done.component';

describe('BorrowDoneComponent', () => {
  let component: BorrowDoneComponent;
  let fixture: ComponentFixture<BorrowDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrowDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

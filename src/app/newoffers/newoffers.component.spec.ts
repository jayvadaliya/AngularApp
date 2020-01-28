import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoffersComponent } from './newoffers.component';

describe('NewoffersComponent', () => {
  let component: NewoffersComponent;
  let fixture: ComponentFixture<NewoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

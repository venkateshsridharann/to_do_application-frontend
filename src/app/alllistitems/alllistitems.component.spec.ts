import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllistitemsComponent } from './alllistitems.component';

describe('AlllistitemsComponent', () => {
  let component: AlllistitemsComponent;
  let fixture: ComponentFixture<AlllistitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlllistitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlllistitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLaboratoryComponent } from './online-laboratory.component';

describe('OnlineLaboratoryComponent', () => {
  let component: OnlineLaboratoryComponent;
  let fixture: ComponentFixture<OnlineLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineLaboratoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

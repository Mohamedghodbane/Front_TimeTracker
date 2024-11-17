import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfrontComponent } from './allfront.component';

describe('AllfrontComponent', () => {
  let component: AllfrontComponent;
  let fixture: ComponentFixture<AllfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

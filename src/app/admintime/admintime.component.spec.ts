import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintimeComponent } from './admintime.component';

describe('AdmintimeComponent', () => {
  let component: AdmintimeComponent;
  let fixture: ComponentFixture<AdmintimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeLogsComponent } from './user-time-logs.component';

describe('UserTimeLogsComponent', () => {
  let component: UserTimeLogsComponent;
  let fixture: ComponentFixture<UserTimeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTimeLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTimeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

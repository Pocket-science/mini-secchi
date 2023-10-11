import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserMeasurementsPage } from './user-measurements.page';

describe('UserMeasurementsPage', () => {
  let component: UserMeasurementsPage;
  let fixture: ComponentFixture<UserMeasurementsPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UserMeasurementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

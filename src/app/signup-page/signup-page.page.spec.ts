import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SignupPagePage } from './signup-page.page';

describe('SignupPagePage', () => {
  let component: SignupPagePage;
  let fixture: ComponentFixture<SignupPagePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SignupPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

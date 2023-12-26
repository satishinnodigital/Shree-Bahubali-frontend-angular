import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycMainComponent } from './kyc-main.component';

describe('KycMainComponent', () => {
  let component: KycMainComponent;
  let fixture: ComponentFixture<KycMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KycMainComponent]
    });
    fixture = TestBed.createComponent(KycMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

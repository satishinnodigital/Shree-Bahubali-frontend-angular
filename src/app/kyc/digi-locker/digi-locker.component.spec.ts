import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiLockerComponent } from './digi-locker.component';

describe('DigiLockerComponent', () => {
  let component: DigiLockerComponent;
  let fixture: ComponentFixture<DigiLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigiLockerComponent]
    });
    fixture = TestBed.createComponent(DigiLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

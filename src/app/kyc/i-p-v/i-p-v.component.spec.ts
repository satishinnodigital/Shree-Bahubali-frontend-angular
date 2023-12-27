import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPVComponent } from './i-p-v.component';

describe('IPVComponent', () => {
  let component: IPVComponent;
  let fixture: ComponentFixture<IPVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IPVComponent]
    });
    fixture = TestBed.createComponent(IPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

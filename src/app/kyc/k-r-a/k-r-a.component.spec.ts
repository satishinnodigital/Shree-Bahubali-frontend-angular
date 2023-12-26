import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRAComponent } from './k-r-a.component';

describe('KRAComponent', () => {
  let component: KRAComponent;
  let fixture: ComponentFixture<KRAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KRAComponent]
    });
    fixture = TestBed.createComponent(KRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MannualEntryComponent } from './mannual-entry.component';

describe('MannualEntryComponent', () => {
  let component: MannualEntryComponent;
  let fixture: ComponentFixture<MannualEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MannualEntryComponent]
    });
    fixture = TestBed.createComponent(MannualEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

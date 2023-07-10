import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitnerHeaderComponent } from './leitner-header.component';

describe('LeitnerHeaderComponent', () => {
  let component: LeitnerHeaderComponent;
  let fixture: ComponentFixture<LeitnerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeitnerHeaderComponent]
    });
    fixture = TestBed.createComponent(LeitnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDecksComponent } from './student-decks.component';

describe('StudentDecksComponent', () => {
  let component: StudentDecksComponent;
  let fixture: ComponentFixture<StudentDecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDecksComponent]
    });
    fixture = TestBed.createComponent(StudentDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormsComponent } from './quiz-forms.component';

describe('QuizFormsComponent', () => {
  let component: QuizFormsComponent;
  let fixture: ComponentFixture<QuizFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormsComponent]
    });
    fixture = TestBed.createComponent(QuizFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

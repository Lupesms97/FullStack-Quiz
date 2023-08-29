import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPresentationComponent } from './quiz-presentation.component';

describe('QuizPresentationComponent', () => {
  let component: QuizPresentationComponent;
  let fixture: ComponentFixture<QuizPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizPresentationComponent]
    });
    fixture = TestBed.createComponent(QuizPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

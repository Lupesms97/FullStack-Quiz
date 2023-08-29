import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizPresentationComponent } from './quiz/quiz-presentation/quiz-presentation.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { QuizFormsComponent } from './quiz/quiz-forms/quiz-forms.component';
import { CongratsComponent } from './quiz/congrats/congrats.component';

const routes: Routes = [
  {path: '', redirectTo: 'presentation',pathMatch: 'full'},
  {path: 'presentation', component:QuizPresentationComponent},
  {path: 'quiz', component:QuestionsComponent},
  {path: 'forms', component:QuizFormsComponent},
  {path: 'congrats', component:CongratsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

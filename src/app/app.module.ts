import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizPresentationComponent } from './quiz/quiz-presentation/quiz-presentation.component';
import { QuizFormsComponent } from './quiz/quiz-forms/quiz-forms.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { CongratsComponent } from './quiz/congrats/congrats.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    QuizPresentationComponent,
    QuizFormsComponent,
    QuestionsComponent,
    CongratsComponent
  ],
  imports: [
    CanvasJSAngularChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [QuestionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

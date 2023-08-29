import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
  public questionsIsComplet: boolean = false;
  public questionsList: any = [];
  public currentQuestion: number = 0;
  public eagleScore: number = 0;
  public wolfScore: number = 0;
  public sharkScore: number = 0;
  public catScore: number = 0;
  public strongAnimal: string = '';

  constructor(private questionsService: QuestionsService, private router: Router) {}



  ngOnInit(): void {
    this.getAllQuestions();
  }



  getAllQuestions() {
    this.questionsService.getQuestionsJson().subscribe(res => {
      this.questionsList = res.questions;
    });
  }

  funcButton() {
    if (this.currentQuestion === this.questionsList.length - 1) {
      this.questionsIsComplet = true;
      return;
    } else {
      this.currentQuestion++;
    }
    this.answer(this.questionsList[this.currentQuestion]);
    this.getStrongAnimal(); 
  }

  answer(option: any) {
    const animal = option.animal;

    switch (animal) {
      case 'eagle':
        this.eagleScore++;
        break;
      case 'wolf':
        this.wolfScore++;
        break;
      case 'shark':
        this.sharkScore++;
        break;
      case 'cat':
        this.catScore++;
        break;
    }
  }

  getPercentage(score: number) {
    const totalScore = this.eagleScore + this.wolfScore + this.sharkScore + this.catScore;
    return (score * 100) / totalScore;
  }

  get chartOptions() {
    const wolfPercentage = this.getPercentage(this.wolfScore);
    const sharkPercentage = this.getPercentage(this.sharkScore);
    const catPercentage = this.getPercentage(this.catScore);
    const eaglePercentage = this.getPercentage(this.eagleScore);


    return {
      animationEnabled: true,
      title: {
        text: 'Sua personalidade',
      },
      data: [
        {
          type: 'doughnut',
          yValueFormatString: "#,###.##'%'",
          indexLabel: "{name}: {y}",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: wolfPercentage, name: 'LOBO' },
            { y: sharkPercentage, name:'TUBARÃO' },
            { y: catPercentage, name: 'GATO' },
            { y: eaglePercentage, name: 'ÁGUIA' },
          ],
        },
      ],
    };
  }

  getStrongAnimal() {
    const wolfPercentage = this.getPercentage(this.wolfScore);
    const sharkPercentage = this.getPercentage(this.sharkScore);
    const catPercentage = this.getPercentage(this.catScore);
    const eaglePercentage = this.getPercentage(this.eagleScore);

    if (
      wolfPercentage > sharkPercentage &&
      wolfPercentage > catPercentage &&
      wolfPercentage > eaglePercentage
    ) {
      this.strongAnimal = 'Lobo';
    } else if (
      sharkPercentage > wolfPercentage &&
      sharkPercentage > catPercentage &&
      sharkPercentage > eaglePercentage
    ) {
      this.strongAnimal = 'Tubarão';
    } else if (
      catPercentage > wolfPercentage &&
      catPercentage > sharkPercentage &&
      catPercentage > eaglePercentage
    ) {
      this.strongAnimal = 'Gato';
    } else {
      this.strongAnimal = 'Águia';
    }
    this.questionsService.setStrongAnimal(this.strongAnimal);
    this.questionsService.setWolfPercentage(wolfPercentage);
    this.questionsService.setSharkPercentage(sharkPercentage);
    this.questionsService.setCatPercentage(catPercentage);
    this.questionsService.setEaglePercentage(eaglePercentage);
  }
  
}



/* this.router.navigate(['/forms']); */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { QuestionsService } from 'src/app/service/questions.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-quiz-forms',
  templateUrl: './quiz-forms.component.html',
  styleUrls: ['./quiz-forms.component.css']
})
export class QuizFormsComponent {
  strongAnimal: string = '';
  wolfpercentage: number = 0;
  sharkpercentage: number = 0;
  catpercentage: number = 0;
  eaglepercentage: number = 0;
  animalText: string = '';

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Grupo Sels',
    from_email: '',
    from_phone: '',
    subject: 'Teste de Personalidade',
    message: '',
    setor:'',
    empresa:''
  });
  

  constructor(private fb: FormBuilder,
  private questionsService: QuestionsService, private http: HttpClient
  ) { }


  ngOnInit() {
    this.questionsService.strongAnimal.subscribe((animal) => {
      this.strongAnimal = animal;
    });
    this.questionsService.wolfPercentage.subscribe((percentage) => {
      this.wolfpercentage = percentage;
    });
    this.questionsService.sharkPercentage.subscribe((percentage) => {
      this.sharkpercentage = percentage;
    });
    this.questionsService.catPercentage.subscribe((percentage) => {
      this.catpercentage = percentage;
    });
    this.questionsService.eaglePercentage.subscribe((percentage) => {
      this.eaglepercentage = percentage;
    });

  }

  public postmethod(event: Event) {

    event.preventDefault(); // Prevent the default form submission behavior

    let body = JSON.stringify({
      ownerRef: 'Grupo Sels',
      emailFrom: 'gruposels@gmail.com',
      emailTo: this.form.value.from_email,
      subject: `${this.form.value.from_name} - ${this.form.value.empresa} - ${this.form.value.setor}`,
      text: `	
      <table width="100%" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <h1 style="color: #333;">Olá ${this.form.value.from_name}!</h1>
          </td>
        </tr>
      </table>

      <table width="80%" cellpadding="20" cellspacing="0" style="color:black">
        <tr>
          <td>
            <p style="font-size:1.3rem; color: black;">Aqui é o time do ${this.form.value.to_name} e gostaríamos de agradecer por ter realizado o teste de personalidade.</p>
            <p style=" color: black;">Abaixo você pode conferir o resultado completo do seu teste.</p>
            <br>
            <h2 style="color:black"><em>Seu Animal predominante é <span style="color:#008b95">${this.strongAnimal}<span></em></h2>

            <div style="color:black;">
              ${this.strongAnimalText()}
            </div>

    
            <p style="color:black;font-weight:bold"><em>Águia: ${this.eaglepercentage.toFixed(2)}%</em></p>
            <div style="width: 60%; border: 1px solid #7f7f7f; border-radius:1rem"">
              <div style="width: ${this.eaglepercentage}%; background-color: #fecb00; height: 20px; border-radius:1rem"></div>
            </div>
    
            <p style="color:black;font-weight:bold"><em>Lobo: ${this.wolfpercentage.toFixed(2)}%</em></p>
            <div style="width: 60%; border: 1px solid #7f7f7f; border-radius:1rem"">
              <div style="width: ${this.wolfpercentage}%; background-color: #cc0000; height: 20px; border-radius:1rem"></div>
            </div>

            <p style="color:black;font-weight:bold"><em>Tubarão: ${this.sharkpercentage.toFixed(2)}%</em></p>
            <div style="width: 60%; border: 1px solid #7f7f7f; border-radius:1rem"">
              <div style="width: ${this.sharkpercentage}%; background-color: #1cad23; height: 20px; border-radius:1rem"></div>
            </div>

            <p style="color:black;font-weight:bold"><em>Gato: ${this.catpercentage.toFixed(2)}%</em></p>
            <div style="width: 60%; border: 1px solid #7f7f7f; border-radius:1rem">
              <div style="width: ${this.catpercentage}%; background-color: #003c69; height: 20px; border-radius:1rem"></div>
            </div>
            <br>
            <br>
            <div style="color:black">
              E-mail: ${this.form.value.from_email}
              <br>
              WhatApp: ${this.form.value.from_phone}
            </div>
            <div style="color:black">
              Setor: ${this.form.value.setor}
            <br>
              Empresa: ${this.form.value.empresa}
            </div>
            
          </td>
        </tr>
      </table>

      <table width="100%" bgcolor="#f5f5f5" cellpadding="10" cellspacing="0"> 
        <tr>
          <td style="text-align: center;">
            <p style="color: #999;">Grupo Sels - Transformando vidas através da educação</p>
          </td>
        </tr>
      </table>

      
    `
    });

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post('https://ms-emailsender-master-production.up.railway.app/sending-email', body, { headers })
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  }
  private eagleText() {
    this.animalText = `
    <h3 style="color:black;">Características principais</h3>

    <h4 style="color:black;"> <em>Comportamentos</em></h4>
    <p style="color:black;"> <em>Fazer Diferente</em></p>
    <p style="color:black;">
    Criativo, intuitivo, foco no futuro, distraído, curioso, informal e flexível.
    </p>


    <h3 style="color:black;">Pontos fortes</h3>

    <h4 style="color:black;"> <em>Idealização</em></h4>
    <p style="color:black;">
    Idealização, antecipa o futuro, criatividade.
    </p>

    <h3 style="color:black;"> Pontos de melhorias</h3>

    <p style="color:black;">
      Falta de atenção no presente, impaciência e rebeldia, defender o novo pelo novo.
    </p>

    <h3 style="color:black;"> Motivações</h3>

    <p style="color:black;"> 
      Liberdade de expressão, Ausência de controle rígido, oportunidade para delegar.
    </p>

    <h3 style="color:black;">Valores</h3>

    <p style="color:black;"> 
      Criatividade e liberdade (inspirar idéias)
    </p>
    `;
  }
  
  private wolfText() {
    this.animalText = `
    <h3 style="color:black;">Características principais</h3>


    <h4 style="color:black;"> <em>Comportamentos</em></h4>
    <p style="color:black;"> <em>Fazer Certo</em></p>
    <p style="color:black;">
    Detalhista, organizado, estrategista, busca do conhecimento, pontual, conservador, previsivel.
    </p>

    <h3 style="color:black;">Pontos fortes</h3>

    <p style="color:black;">
      Organização, passado, presente e futuro, consistência, conformidade e qualidade, lealdade e segurança,
      regras e responsabilidades.
    </p>

    <h3 style="color:black;">Pontos de melhorias</h3>

    <p style="color:black;">
      Dificuldade de se adaptar a mudanças, pode impedir o progresso, detalhista, estruturado e
      demasiadamente sistematizado.
    </p>



    <h3 style="color:black;">Motivações</h3>

    <p style="color:black;">
      Certeza, compreensão exata das regras, conhecimento especifico, ausência de riscos e erros, ver o produto
      acabado (começo, meio e fim).
    </p>


    <h3 style="color:black;">Valores</h3>

    <p style="color:black;">
        Ordem e controle
    </p>
    `;
  }
  
  private sharkText() {
    this.animalText = `
    <h3 style="color:black;">Características principais</h3>


    <h4 style="color:black;"> <em>Comportamentos</em></h4>
    <p style="color:black;"> <em>Fazer rápido</em></p>
    <p style="color:black;">
      Senso de urgência, iniciativa, prático, impulsivo, vencer desafios, aqui e agora, auto suficiente, não delegar.
    </p>

    <h3 style="color:black;">Pontos fortes</h3>

    <p style="color:black;">
      Ação, fazer com que ocorra, parar com a burocracia, motivação.
    </p>

    <h3 style="color:black;">Pontos de melhorias</h3>

    <p style="color:black;">
      Faz da  forma mais fácil, relacionamento complicado.
    </p>



    <h3 style="color:black;">Motivações</h3>

    <p style="color:black;">
      Liberdade para agir individualmente, controle das proprias atividades, resolver os problemas do seu jeito,
      competição individual, variedade de atividades, não ter que repetir tarefas.
    </p>


    <h3 style="color:black;">Valores</h3>

    <p style="color:black;">
      Resultado
    </p>
    `;
  }
  
  private catText() {
    this.animalText = `
    <h3 style="color:black;">Características principais</h3>

    
    <h4 style="color:black;"> <em>Comportamentos</em></h4>
    <p style="color:black;">
      Fazer junto (Comunicação)
    </p>
    <p style="color:black;">
        Sensível, relacionamentos, time, tradicional, contribuição, busca, harmonia, delega autoridade.
    </p>
    
    
    
    <h3 style="color:black;">Pontos fortes</h3>
    
    <p style="color:black;">
      Comunicação, mantem a harmonia, desenvolve e mantem a cultura, comunicação aberta.
    </p>
    
    
    
    <h3 style="color:black;">Pontos de melhorias</h3>
    
    <p style="color:black;">
      Esconder conflitos, felicidade acima dos resultados, manipulação através de sentimentos.
    </p>
    
    
    
    <h3 style="color:black;">Motivações</h3>
    
    <p style="color:black;">
      Segurança, aceitação social, construir o consenso, reconhecimento da equipe, supervisão compreensiva,
      ambiente harmonico, trabalho em grupo.
    </p>
    
    
    <h3 style="color:black;">Valores</h3>
    
    <p style="color:black;">
      Felicidade e igualdade (pensa nos outros)
    </p>
    `;
  }

  private strongAnimalText() {
    const animal = this.strongAnimal;
  
    switch (animal) {
      case 'Águia':
        this.eagleText();
        break;
      case 'Lobo':
        this.wolfText();
        break;
      case 'Tubarão':
        this.sharkText();
        break;
      case 'Gato':
        this.catText();
        break;
      default:
        this.animalText = 'Default answer';
        break;
    }
  
    return this.animalText;
  }

}

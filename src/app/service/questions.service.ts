import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private strongAnimalSource = new BehaviorSubject<string>('');
  private wolfPercentageSource = new BehaviorSubject<number>(0);
  private sharkPercentageSource = new BehaviorSubject<number>(0);
  private catPercentageSource = new BehaviorSubject<number>(0);
  private eaglePercentageSource = new BehaviorSubject<number>(0);

  wolfPercentage: Observable<number> = this.wolfPercentageSource.asObservable();
  sharkPercentage: Observable<number> = this.sharkPercentageSource.asObservable();
  catPercentage: Observable<number> = this.catPercentageSource.asObservable();
  eaglePercentage: Observable<number> = this.eaglePercentageSource.asObservable();
  strongAnimal: Observable<string> = this.strongAnimalSource.asObservable();
  




  constructor(private http: HttpClient) { }

  getQuestionsJson(){
    return this.http.get<any>('assets/questions.json');
  }
 
  setStrongAnimal(animal: string) {
    this.strongAnimalSource.next(animal);
  }
  setWolfPercentage(percentage: number) {
    this.wolfPercentageSource.next(percentage);
  }
  setSharkPercentage(percentage: number) {
    this.sharkPercentageSource.next(percentage);
  }
  setCatPercentage(percentage: number) {
    this.catPercentageSource.next(percentage);
  }
  setEaglePercentage(percentage: number) {
    this.eaglePercentageSource.next(percentage);
  }

}

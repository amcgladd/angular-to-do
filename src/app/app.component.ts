import { Component } from '@angular/core';

@Component({
  selector: 'hot-dog',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course");
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}

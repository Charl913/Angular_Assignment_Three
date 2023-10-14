import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  incrementClicks : number[] = [];

  isDisplayed = true;

  num = 0;


  toggleDisplay() {
    this.isDisplayed === true ? this.isDisplayed = false : this.isDisplayed= true

    this.num ++;

    this.incrementClicks.push(this.num);
  }
}

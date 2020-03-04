import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import {MaterialModule} from './material.modules';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'first-app';
  nummer = Math.floor(Math.random()*100)+1;
  aantalGokken =10;
  hint = "";
  aantalBeurten = 10;
  degok;
  gok() {
    this.degok = parseFloat((<HTMLInputElement>document.getElementById("degok")).value);
    if (this.degok < this.nummer) {
      this.hint = "hoger";
    }
    else if (this.degok > this.nummer) {
      this.hint = "lager";
    }
    else {
      window.alert("Je hebt het juist nummer geraden! :D Wil je opnieuw spelen?");
      window.location.reload();
    }
    this.aantalBeurten -= 1;
    if (this.aantalBeurten == 0 && this.degok != this.nummer) {
      window.alert("GAME OVER! :( Wil je opnieuw spelen?");
      window.location.reload();
    }
  }

  seconden : number;
  timer = setInterval(function() {
    CounterService.counter -=1;
    this.seconden = CounterService.counter;
    document.getElementById("countdown").innerHTML = this.seconden;
    if (this.seconden < 0) {
      window.alert("Je hebt het juist getal niet geraden binnen de tijd :( Wil je opnieuw spelen?");
      window.location.reload();
    }
  }, 1000);

  
}
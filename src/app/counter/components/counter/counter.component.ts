import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
})

export class CounterComponent  {
  public counter: number = 0;

  public increaseBy(value:number):void {
    this.counter =this.counter + value;
  }

  public resetCounter():void {
    this.counter = 0;
  }

}

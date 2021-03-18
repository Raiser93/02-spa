import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styles: [
  ]
})
export class HeroesCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id: number;
  @Output() funVerHeroe: EventEmitter<number>;

  constructor() {
    this.funVerHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): any {
    this.funVerHeroe.emit(this.id);
  }

}

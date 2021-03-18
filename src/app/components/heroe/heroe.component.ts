import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent {
    heroe: Heroe;

    constructor(
        private route: ActivatedRoute,
        public heroesServices: HeroesServices
    ) {
        this.route.params.subscribe(({id}) => {
            this.heroe = this.heroesServices.getHeroeByIndex(id);
        });
    }

}

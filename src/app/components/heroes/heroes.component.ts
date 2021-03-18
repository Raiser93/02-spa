import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
    heroes: Heroe[];

    constructor(
        public heroesServices: HeroesServices,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.heroes = this.heroesServices.getHeroes();
        console.log(this.heroes);
    }

    verHeroe(index): any {
        this.router.navigate(['heroe', index]);
    }

}

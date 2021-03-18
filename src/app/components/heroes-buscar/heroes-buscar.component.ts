import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroes-buscar',
    templateUrl: './heroes-buscar.component.html',
    styles: []
})
export class HeroesBuscarComponent implements OnInit {

    heroes: Heroe[];
    termino: any;

    constructor(
        private route: ActivatedRoute,
        public heroesServices: HeroesServices,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(({termino}) => {
            this.heroes = this.heroesServices.buscarHeroes(termino);
            console.log(this.heroes);
        });
    }

    verHeroe(index): any {
        this.router.navigate(['heroe', index]);
    }

}

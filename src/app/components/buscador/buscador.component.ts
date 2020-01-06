import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService: HeroesService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this.heroService.buscarHeroes( params['termino'] );
      });
  }

  verHeroe(idx: number) {
  }

}

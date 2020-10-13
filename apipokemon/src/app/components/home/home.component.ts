import { Component, OnChanges, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stats: any;
  imgUrl: any;
  pokeType: any;
  pokemon: any[] = [];
  termino: string;

  constructor( private pokeService: PokeServiceService ) {

  }


  getPokemon(termino: string) {
    if (termino.length > 0 && termino !== undefined) {
        this.termino = termino.toLowerCase();
        console.log(termino);
        return this.termino;
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(){

    return this.getPokemon(this.termino);
  }

}

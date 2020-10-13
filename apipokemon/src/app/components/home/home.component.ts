import { Component, OnChanges, OnInit, NgModule } from '@angular/core';
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
        this.termino = termino;
        return this.termino;
    }
  }

  ngOnInit(): void {
    console.log(this.termino);
  }
  ngOnChanges(){

    return this.getPokemon(this.termino);
  }

}

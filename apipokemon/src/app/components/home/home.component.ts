import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stats: any;

  constructor( private pokeService: PokeServiceService ) { }

  getPokemon(pokemon: string){
   this.pokeService.getPokemon(pokemon);
   console.log(pokemon);
   this.stats = this.pokeService.stats;
  }

  ngOnInit(): void {
  }

}

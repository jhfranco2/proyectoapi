import { Component, OnInit, Input } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-tarjeta-stadistica',
  templateUrl: './tarjeta-stadistica.component.html',
  styleUrls: ['./tarjeta-stadistica.component.css']
})
export class TarjetaStadisticaComponent implements OnInit {

  @Input() termino: string;
  pokemon: any;
  imgUrl: any;



  constructor(private pokeService: PokeServiceService ) {

   }

   getPokeCard() {
     this.pokeService.getPokemon(this.termino)
      .subscribe(data => {
        this.pokemon = data;
        this.imgUrl = data.sprites.other.dream_world.front_default;
        console.log(this.pokemon);
      });
   }
  ngOnInit(): void {
    console.log("desde el card");
    this.getPokeCard();
  }

}

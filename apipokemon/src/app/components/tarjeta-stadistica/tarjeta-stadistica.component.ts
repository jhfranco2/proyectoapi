import { Component, OnInit, Input } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-tarjeta-stadistica',
  templateUrl: './tarjeta-stadistica.component.html',
  styleUrls: ['./tarjeta-stadistica.component.css']
})
export class TarjetaStadisticaComponent {

  @Input() termino: string;
  pokemon: any;
  imgUrl: any;
  error: any;
  stats: any;
  abilities: any;
  loading: boolean;
  imagesUrl: any[] = [];
  

  constructor(private pokeService: PokeServiceService ) {

   }

    pushImages(object) {

      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key];
          if (element !== null) {
            this.imagesUrl.push({ 'src': element })
          }
          console.log(element)
          
        }
      }
      console.log(this.imagesUrl.slice(0,4))
    }

   getPokeCard() {
     this.error = null;
     this.loading = true;
     this.pokeService.getPokemon(this.termino)
      .subscribe(data => {
       
        this.pokemon = data;        
        this.stats = data.stats;
        this.pushImages(data.sprites);
        this.abilities = data.abilities;
        this.imgUrl = data.sprites.other.dream_world.front_default;
        console.log(this.pokemon);
        setTimeout(() => {
          this.loading = false;
        }, 2500);
      },
      err => this.error = err.status
      );
   }
  ngOnInit(): void {
  }
  ngOnChanges(): void {

    this.getPokeCard();
  }

}

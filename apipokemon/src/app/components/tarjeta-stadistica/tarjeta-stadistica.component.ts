import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  loading: boolean;
  imagesUrl: any[] = [];


  constructor(private pokeService: PokeServiceService ) {

   }

    pushImages(object) {

      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key];
          if (element !== null) {
            this.imagesUrl.push({ path: element });
          }
        }
      }

    }

   getPokeCard() {
     this.error = null;
     this.loading = true;
     this.imagesUrl = [];
     this.pokeService.getPokemon(this.termino)
      .subscribe(data => {

        this.pokemon = data;
        this.stats = data.stats;
        this.pushImages(data.sprites);
        this.imgUrl = data.sprites.other.dream_world.front_default;
        console.log(this.pokemon);
        setTimeout(() => {
          this.loading = false;
        }, 2000);
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

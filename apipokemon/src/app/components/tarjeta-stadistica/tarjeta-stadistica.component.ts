import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-tarjeta-stadistica',
  templateUrl: './tarjeta-stadistica.component.html',
  styleUrls: ['./tarjeta-stadistica.component.css']
})
export class TarjetaStadisticaComponent implements OnInit {

  constructor(private pokeService: PokeServiceService ) { }
  imgUrl = this.pokeService.imgUrl;
  ngOnInit(): void {
  }

}

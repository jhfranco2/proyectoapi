import { Component } from '@angular/core';
import { ConexionService } from './Service/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiPokemon';
  public pokemon: any = [];
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private ConexionService: ConexionService
  ){

    this.ConexionService.getConexion().subscribe((resp: any) => {

      this.pokemon = resp;
    });
  }
}

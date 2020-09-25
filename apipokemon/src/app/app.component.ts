import { Component } from '@angular/core';
import { ConexionService } from './Service/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ApiPokemon';
  public pokemon: any;
  // tslint:disable-next-line: ban-types
  public hola: String = 'equis';
  public stats: Array<any>;
  public tipo: Array<any>;

  constructor(

    // tslint:disable-next-line: no-shadowed-variable
    private ConexionService: ConexionService
  ){


    this.ConexionService.getConexion().subscribe((resp: any) => {

      this.pokemon = resp;
    });


    this.ConexionService.getConexion().subscribe((resp: any) => {

      this.pokemon = resp;
      this.stats = resp.stats;
      this.tipo = resp.types;
      console.log(this.tipo);
    });

  }
}

import { Component } from '@angular/core';

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

  constructor(){}
}

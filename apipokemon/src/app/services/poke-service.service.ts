import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {


  stats: any[] = [];
  abilities: any[] = [];
  pokemons: any[] = [];
  imgUrl: any;
  pokeType: any;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}


getPokemon(termino: string) {

  return this.http.get(`${this.baseUrl}${termino}`)
  .pipe( map( (data: any) => data ));
}


}
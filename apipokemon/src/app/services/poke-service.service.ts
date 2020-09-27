import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {


  stats: any[] = [];
  abilities: any[] = [];
  pokemons: any[] = [];
  constructor(private http: HttpClient) {}

  getPokemon(pokemon: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
              .subscribe((data: any) => {
                this.pokemons = data;
                console.log(data);
                console.log(data.name);
                console.log(this.pokemons);

  });
}
}

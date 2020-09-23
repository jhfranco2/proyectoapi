import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  url = 'https://pokeapi.co/api/v2/pokemon/149/';
  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio pokemon');
   }

    // tslint:disable-next-line: typedef
    getConexion(){
     const header = new HttpHeaders()
     .set('Type-content', 'aplication/json');
     return this.http.get(this.url, {
     headers: header
   });
    }

}

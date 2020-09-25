import { Component } from '@angular/core';
import { ConexionService } from './Service/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apipokemon';
  public pokemon:any
  public hola:String= "equis";
  public stats:Array<any>;
  constructor(
    private ConexionService:ConexionService
  ){
    
    this.ConexionService.getConexion().subscribe((resp:any)=>{
      
      this.pokemon = resp
      this.stats = resp.stats
      console.log(this.stats)
    })
  }
}

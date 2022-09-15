import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `]
})
export class PorPaisComponent  {
  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  noHay:boolean=true;
  mostrarSugerencias:boolean = false;

  constructor(private paisService:PaisService) { }
  

  buscar(termino:string){
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      (resp) => {console.log(resp);
                this.paises = resp;
                if (resp.length===0){
                  this.noHay = true;
                }
              },
      (err) => {this.hayError = true;
                this.paises = [];}
      );
      
  }

  sugerencias(termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      paises=>this.paisesSugeridos = paises.slice(0, 5),
      err=>this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }


}

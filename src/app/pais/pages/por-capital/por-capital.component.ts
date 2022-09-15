import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent{
  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  noHay:boolean=true;

  constructor(private paisService:PaisService) {}

  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPorCapital(termino).subscribe(
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


}

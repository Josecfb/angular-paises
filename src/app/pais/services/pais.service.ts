import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  params = new HttpParams().set('fields','capital,name,population,flags,cca2');

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>(url, {params:this.params});
  }
  buscarPorCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.params});
  }
  buscarPorCodigo(id:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
  buscarPorRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params:this.params});
  }
}

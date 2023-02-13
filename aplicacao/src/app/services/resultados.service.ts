import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  defaultCaixaUrl = "https://servicebus2.caixa.gov.br/portaldeloterias/api/lotomania/"

  constructor( private http: HttpClient ) { }

  buscaLotomania(conc: any){
    !conc ? conc=" " : console.log(conc);
    return this.http.get(this.defaultCaixaUrl + conc);
  }
}

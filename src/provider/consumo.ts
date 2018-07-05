import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from './globals';

@Injectable()
export class ConsumoProvider {
  private user: any;
  private token: String;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  //TODO
  getConsumo(usuario_id: string) {
    console.log('realizando busca de consumo');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.globals.baseUrl + "/api/consumo/?usuarioid=" + usuario_id, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 url='https://reqres.in/api/users/';

  constructor(private http: HttpClient) { }

  getCliente(){
    return this.http.get(this.url);
  }
}

  /*interface*/
  export class Cliente{
    id: number;
    email: string;
    first_name: string;
    avatar:string;
}

 /* searchCliente(query = '', page = 5){
    const filter = `${environment.baseUrlAPI}/?first_name=${query}&page=${page}`;
    return this.http.get<Cliente[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Cliente>(`${environment.baseUrlAPI}/${id}`);
  }*/
}

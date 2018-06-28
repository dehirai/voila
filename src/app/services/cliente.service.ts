import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {


    private API_URL = "LINK DA API"

    
    constructor(private http: HttpClient){}
    
    getCliente() {
        var data = this.http.get(this.API_URL);
        return data;
    }
    //Lista
    //Observable<Cliente[]>
    
    // addCliente (cliente: Cliente): Observable<Cliente> {
    //     return this.http.post<Cliente>(this.API_URL/..., cliente, httpOptions)
    //       .pipe(
    //         catchError(this.handleError('addCliente', cliente))
    //       );
    //   }
}
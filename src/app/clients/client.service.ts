import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Client } from './client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
    // return this.http.get(this.urlEndPoint).pipe(
    //   map((response) => response as Client[])
    // );
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint + '/save', client, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.client as Client),
      catchError(e => {
        
        if(e.status == 400) {
          return throwError( () => e );
        }

        Swal.fire(e.error.message, e.error.error, 'error');
        return throwError( () => e );
      })
    );
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
          this.router.navigate(['/clients']);
          Swal.fire("Error", e.error.message,  'error');
          return throwError( () => e );       
      })
    );
  }

  update(client: Client): Observable<any> {
    return this.http.put(`${this.urlEndPoint}/update/${client.id}`, client, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        
        if(e.status == 400) {
          return throwError( () => e );
        }

        Swal.fire(e.error.message, e.error.error, 'error');
        return throwError( () => e );
      })
    );
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.client as Client),
      catchError(e => {
        Swal.fire(e.error.message, e.error.error, 'error');
        return throwError( () => e );
      })
    );
  }
}

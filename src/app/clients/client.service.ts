import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Client } from './client';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
    // return this.http.get(this.urlEndPoint).pipe(
    //   map((response) => response as Client[])
    // );
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint + '/save', client, { headers: this.httpHeaders });
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`)
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/update/${client.id}`, client, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders})
  }

}

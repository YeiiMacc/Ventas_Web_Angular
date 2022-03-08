import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint: string = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
    // return this.http.get(this.urlEndPoint).pipe(
    //   map((response) => response as Client[])
    // );
  }

}

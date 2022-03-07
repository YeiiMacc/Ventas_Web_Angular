import { Injectable } from '@angular/core';
import { Client } from './client';
import { clientsJson } from './clients.json'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client[] {
    return clientsJson;
  };
  
}

import { Component, OnInit } from '@angular/core';
import { clientsJson } from './clients.json'
import { Client } from './client'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients: Client[] = [];

  constructor() {};

  ngOnInit(): void {
    this.clients = clientsJson;
  }
}

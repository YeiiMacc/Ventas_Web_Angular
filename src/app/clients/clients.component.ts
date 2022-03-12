import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Client } from './client'
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  
  clients: Client[] = [];

  constructor(private clientService: ClientService) {};

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients   
    );
  }

  delete(client: Client): void {
    Swal.fire({
      title: `Delete data of ${client.firstName} ${client.lastName}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.clientService.delete(client.id).subscribe(
          response => {
            this.clients = this.clients.filter(cli => cli !== client)

            Swal.fire(
              'Deleted!',
              `Deleted ${client.firstName}.`,
              'success'
            )

          }
        )

        
      }
    })
  }

}

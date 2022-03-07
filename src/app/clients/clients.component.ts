import { Component } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent  {
  title = 'List of clients';

  clients: Client[] = [
    new Client(1, 'Luis', 'Torres', 'luisT@gmail.com', '2021-09-12', '2021-09-13'),
    new Client(2, 'Camila', 'Zambrano', 'camilaZ@gmail.com', '2021-09-13', '2021-09-14'),
    new Client(3, 'Andrea', 'Gomez', 'andreaG@gmail.com', '2021-09-14', '2021-09-15'),
    new Client(4, 'Ivan', 'Lopez', 'ivanL@gmail.com', '2021-09-15', '2021-09-16'),
    new Client(5, 'Jose', 'Celly', 'joseC@gmail.com', '2021-09-16', '2021-09-17'),
  ]
  
}

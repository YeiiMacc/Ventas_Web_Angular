import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public client: Client = new Client();
  public title: string = 'New client';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.uploadFormData()
  }

  public alertSuccess(FullName: string): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `New Client Created!!!`,
      text: FullName,
      showConfirmButton: false,
      timer: 4500
    })
  }

  public create(): void {
    this.clientService.create(this.client).subscribe(
      response => {
        this.router.navigate(['/clients']);
        this.alertSuccess(response.firstName + ' ' + response.lastName);
      }
    );
  }

  public uploadFormData(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clientService.getClient(id).subscribe((client) => this.client = client)
      }
    })
  }

}

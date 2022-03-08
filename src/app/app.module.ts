import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/clients', pathMatch: 'full'},
  {path: 'directives', component: FooterComponent},
  {path: 'clients', component:ClientsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

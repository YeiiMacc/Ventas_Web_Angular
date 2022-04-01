import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './clients/form/form.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en'
// import localeEs from '@angular/common/locales/es'

registerLocaleData(localeEn, 'en');
// registerLocaleData(localeEs, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directives', component: FormComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en' },
    // {provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

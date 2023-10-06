import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SitioComponent } from './sitio/sitio.component';
import { ComponentsComponent } from './sitio/components/components.component';
import { PagesComponent } from './sitio/pages/pages.component';
import { CardCarrerasComponent } from './sitio/components/card-carreras/card-carreras.component';
import { FooterComponent } from './sitio/components/footer/footer.component';
import { HeaderComponent } from './sitio/components/header/header.component';
import { SliderComponent } from './sitio/components/slider/slider.component';
import { InscripcionMesasComponent } from './sitio/pages/inscripcion-mesas/inscripcion-mesas.component';
import { InstitucionalComponent } from './sitio/pages/institucional/institucional.component';
import { LoginComponent } from './sitio/pages/login/login.component';
import { AdminComponent } from './admin/admin.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SitioComponent,
    ComponentsComponent,
    PagesComponent,
    CardCarrerasComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    InscripcionMesasComponent,
    InstitucionalComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    Observable,
    NgFor,
    AsyncPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

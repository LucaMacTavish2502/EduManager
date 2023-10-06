import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './sitio/components/header/header.component';
import { FooterComponent } from './sitio/components/footer/footer.component';
import { LoginComponent } from './sitio/pages/login/login.component';
import { InstitucionalComponent } from './sitio/pages/institucional/institucional.component';
import { InscripcionMesasComponent } from './sitio/pages/inscripcion-mesas/inscripcion-mesas.component';
import { EquipoDesarrolloComponent } from './sitio/pages/equipo-desarrollo/equipo-desarrollo.component';
import { CardCarrerasComponent } from './sitio/components/card-carreras/card-carreras.component';
import { SliderComponent } from './sitio/components/slider/slider.component';

//Angular Material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PrincipalComponent } from './sitio/pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    InscripcionMesasComponent,
    InstitucionalComponent,
    EquipoDesarrolloComponent,
    CardCarrerasComponent,
    SliderComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

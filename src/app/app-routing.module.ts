import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioComponent } from './sitio/sitio.component';

const routes: Routes = [
  {path:'',component:SitioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

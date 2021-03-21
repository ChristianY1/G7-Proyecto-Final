import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FacturaComponent } from './factura/factura.component';

//aqui se agregan al router
//los componentes, modulos, de la app
//en este caso el home y registrar
const routes: Routes = [
  { path: '', component: HomeComponent }, //esto se agrega
  { path: 'home', component: HomeComponent },
  {path: 'registrar', component: RegistrarComponent}, //esto
  {path: 'facturar', component: FacturaComponent} //esto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

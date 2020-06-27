import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';

//aqui se agregan al router
//los componentes, modulos, de la app
//en este caso el home y registrar
const routes: Routes = [
  { path: '', component: HomeComponent }, //esto se agrega
  {path: 'registrar', component: RegistrarComponent} //esto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

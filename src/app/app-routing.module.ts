import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicolistComponent } from './components/tecnico/tecnicolist/tecnicolist.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';

const routes: Routes = [
{path: 'login',component: LoginComponent },
{
  path: '', component: NavComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component: HomeComponent},
    {path: 'tecnicos', component: TecnicolistComponent},
    {path: 'tecnicos/create', component: TecnicoCreateComponent},
    {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent},
    {path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent},

    {path: 'clientes', component: ClientelistComponent},
    {path: 'clientes/create', component: ClienteCreateComponent},
    {path: 'clientes/update/:id', component: ClienteUpdateComponent},
    {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

    {path: 'chamados', component: ChamadoListComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicolistComponent } from './components/tecnico/tecnicolist/tecnicolist.component';

const routes: Routes = [
{
  path: '', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'tecnicos', component: TecnicolistComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

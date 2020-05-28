import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarPerfilComponent } from './cadastrar-perfil/cadastrar-perfil.component';

const routes: Routes = [
  { path: 'cadastrar-perfil', component: CadastrarPerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

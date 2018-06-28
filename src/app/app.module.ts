import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './cliente/pedidos/pedidos.component';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { EscolherprofissionalComponent } from './cliente/escolherprofissional/escolherprofissional.component';
import { SolicitarComponent } from './cliente/solicitar/solicitar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PerfilComponent } from './cliente/perfil/perfil.component';
import { AvaliacaoComponent } from './cliente/avaliacao/avaliacao.component';




const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: InstitucionalComponent},
  {path: 'login', component: LoginComponent },
  { path: 'cliente', 
    component: HomeClienteComponent, 
    children: [
      // {path: '', component: SolicitarComponent },
      {path: 'solicitar-servico', component: SolicitarComponent },
      {path: 'escolher-profissional', component: EscolherprofissionalComponent},
      {path: 'meus-pedidos', component: PedidosComponent},
      {path: 'meu-perfil', component: PerfilComponent}
    ]
  },
  {path: 'cadastrar-cliente', component: CadastroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InstitucionalComponent,
    LoginComponent,
    CadastroComponent,
    PedidosComponent,
    HomeClienteComponent,
    EscolherprofissionalComponent,
    SolicitarComponent,
    PerfilComponent,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

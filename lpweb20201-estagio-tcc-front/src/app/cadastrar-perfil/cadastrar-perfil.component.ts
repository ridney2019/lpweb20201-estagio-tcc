import { PerfilService } from './../perfil.service';
import { Cadastrar } from './cadastrar.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-cadastrar-perfil',
  templateUrl: './cadastrar-perfil.component.html',
  styleUrls: ['./cadastrar-perfil.component.css']
})
export class CadastrarPerfilComponent implements OnInit {

  cadastro: Cadastrar = {
    nome: '',
    sexo: '',
    cpf: null,
    telefone: null,
    endereco: '',
    estadouf: '',
    cidade: '',
    cep: ''
  }
  
  constructor(public auth$: AuthService,private perfilservice$: PerfilService, private router: Router) { }

  ngOnInit(): void {
  }


  cadastrarPerfil():void{
      this.perfilservice$.cadastrar(this.cadastro).subscribe(() => {
      this.router.navigate(['/perfil'])
    })
  }

  cancel(): void {
    this.router.navigate(['/perfil'])
  }

  
  logout() {
    this.auth$.logout();
    this.router.navigate(['/']);
  }

}

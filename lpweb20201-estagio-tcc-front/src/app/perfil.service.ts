
import { Cadastrar } from './cadastrar-perfil/cadastrar.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  baseUrl = "http://localhost:4200/perfil";

  constructor( private http: HttpClient, private auth$: AuthService) { }

  perfilLogado() {
    return this.http.get(environment.API_URL.concat('perfil-logado/'), this.auth$.httpOptions());
  }

  cadastrar(cadastrar: Cadastrar): Observable<Cadastrar> {
        return this.http.post<Cadastrar>(this.baseUrl, cadastrar);
  }
  


}
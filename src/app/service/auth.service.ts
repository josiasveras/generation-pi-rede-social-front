import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set("Authorization", environment.token)
    }
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    //return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)

    //Conexão com Heroku 
   return this.http.post<UserLogin>('https://piredesocial.herokuapp.com/usuarios/logar', userLogin)
  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    //return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)

    //Conexão com Heroku 
    return this.http.post<Usuario>('https://piredesocial.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUser(id: number):  Observable<Usuario> {
    // return this.http.get<Usuario>(`http://localhost:8080/usuarios/buscar/${id}`, this.token)
    return this.http.get<Usuario>(`https://piredesocial.herokuapp.com/usuarios/buscar/${id}`, this.token)
  }

  getAllUsuarios(): Observable<Usuario[]>{
   // return this.http.get<Usuario[]>('http://localhost:8080/usuarios/buscar/tudo', this.token)
    return this.http.get<Usuario[]>('https://piredesocial.herokuapp.com/usuarios/buscar/tudo', this.token)
  }


  logado() {
    let ok: boolean = false
    
    if(environment.token != ''){
      ok = true
    }
    return ok
  }

}

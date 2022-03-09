import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  getByIdPostagem(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://piredesocial.herokuapp.com/temas/buscar/${id}`, this.token)

    //Conexão local
    //return this.http.get<Tema>(`http://localhost:8080/temas/buscar/${id}`, this.token)
  }

  getAllTema(): Observable<Tema[]>{

    return this.http.get<Tema[]>('https://piredesocial.herokuapp.com/temas/buscar', this.token)

    //Conexão local
    //return this.http.get<Tema[]>('http://localhost:8080/temas/buscar', this.token)
  }

  postTema( tema : Tema): Observable<Tema> {
    return this.http.post<Tema>('https://piredesocial.herokuapp.com/temas/salvar', tema, this.token)

    //Conexão local
    //return this.http.post<Tema>('http://localhost:8080/temas/salvar', tema, this.token)
  }

  /* putTema(id: number): Observable<Tema> {
    return this.http.put<Tema>(`https://piredesocial.herokuapp.com/temas/atualizar/${id}`, this.token) */

    //Conexão local
    //return this.http.put<Tema>('http://localhost:8080/temas/atualizar', tema, this.token)
  //}
  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://piredesocial.herokuapp.com/temas/atualizar', tema, this.token);
  }


  deleteTema( id : number) {
   return this.http.delete(`https://piredesocial.herokuapp.com/temas/apagar/${id}`, this.token )

    //Conexão local
    //return this.http.delete(`http://localhost:8080/temas/apagar/${id}`, this.token )
  }







}

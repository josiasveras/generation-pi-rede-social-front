import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient
    ) { }
    token = {

      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  
    getAllPostagens(): Observable<Postagem[]>{
      // return this.http.get<Postagem[]>('http://localhost:8080/postagens/buscar', this.token)
        return this.http.get<Postagem[]>('https://piredesocial.herokuapp.com/postagens/buscar', this.token)
    }
  
    postPostagem( postagem: Postagem): Observable<Postagem> {
      // return this.http.post<Postagem>('http://localhost:8080/postagens/salvar', postagem, this.token)
      return this.http.post<Postagem>('https://piredesocial.herokuapp.com/postagens/salvar', postagem, this.token)
    }
    getByIdPostagem(id: number): Observable<Postagem> {
     // return this.http.get<Postagem>(`http://localhost:8080/postagens/buscar/${id}`, this.token) }
     return this.http.get<Postagem>(`https://piredesocial.herokuapp.com/postagens/buscar/${id}`, this.token) }


     putPostagem( postagem: Postagem): Observable<Postagem> {
      //  return this.http.put<Postagem>('http://localhost:8080/postagens/atualizar', postagem, this.token)
    return this.http.put<Postagem>('https://piredesocial.herokuapp.com/postagens/atualizar', postagem, this.token)
    
      }
      deletePostagem( id : number) {
        // return this.http.delete(`http://localhost:8080/postagens/apagar/${id}`, this.token )
        return this.http.delete(`https://piredesocial.herokuapp.com/postagens/apagar/${id}`, this.token )
        
        }
        
}

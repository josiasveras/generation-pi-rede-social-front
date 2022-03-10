import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  listaUsuarios: Usuario[]
  tipoUser = environment.tipo



  constructor(
    private router: Router,
    private temaService: TemaService,
    private authService: AuthService,
    private postagemService: PostagemService

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      alert('sua sessão expirou faça login novamente')
      this.router.navigate(['/entrar'])

    }
    this.authService.refreshToken()
    this.getAllPostagens()
    this.getAllTemas()
    this.getAllUsuarios()

  }

  getAllUsuarios() {
    this.authService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp
    })
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
      console.log(this.listaTemas)
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    });
  }

  getAllPostagens() {

    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar() {

    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem Realizada com Sucesso!!!')
      this.postagem = new Postagem()
      this.getAllPostagens()
      this.getAllTemas()
    })

  }

}

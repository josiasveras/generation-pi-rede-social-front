import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value

  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.foto == '' || this.usuario.foto == null) {
      this.usuario.foto = "https://i.imgur.com/rNUV85x.png";
    }

    if (this.usuario.senha != this.confirmarSenha) {
      alert('senhas incorretas')
    } else {
      this.authservice.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('usuário cadastrado com sucesso')
        this.router.navigate(['/entrar'])
      })
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidebar: any;
  id = environment.id;
  nome = environment.nome;
  foto = environment.foto;
  
  constructor(
    public auth: AuthService,
    private router: Router
  ){}

  menuCollapse() {
    //Refresh Usuário
    this.id = environment.id;
    this.nome = environment.nome;
    this.foto = environment.foto;

    // let btn = document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    // let searchBtn = document.querySelector(".fa-search");

    this.sidebar.classList.toggle("active");

    // this.sidebar.classList.toggle("active");
    // alert("Olá mundo!!");
  }

  sair() {
    this.router.navigate(["/entrar"]);
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
    environment.foto = '';
  }
}

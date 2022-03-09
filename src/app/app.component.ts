import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebar: any
  constructor(
    public auth: AuthService
  ){}

  menuCollapse() {
    // let btn = document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    // let searchBtn = document.querySelector(".fa-search");

    this.sidebar.classList.toggle("active");

    // this.sidebar.classList.toggle("active");
    // alert("Olá mundo!!");
  }
}

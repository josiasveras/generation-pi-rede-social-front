import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sidebar: any;

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

  menuCollapse() {
    // let btn = document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    // let searchBtn = document.querySelector(".fa-search");

    this.sidebar.classList.toggle("active");

    // this.sidebar.classList.toggle("active");
    // alert("Olá mundo!!");
  }

}

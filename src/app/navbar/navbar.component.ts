import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  padNav:boolean = false

  checked:boolean = false;
icon(){
  if(!this.checked){
    this.checked = true;
  }else{
    this.checked = false;
  }
}
@HostListener("document:scroll")scrollFun(){
if(document.documentElement.scrollTop > 0){
  this.padNav = true
}
else{
  this.padNav =false
}
}
}

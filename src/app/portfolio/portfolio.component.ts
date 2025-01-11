import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images = [
    "port1.png",
    "port2.png",
    "port3.png",
    "port1.png",
    "port2.png",
    "port3.png"
  ]
  image:string=""
  changeImag(item:string):void{
    this.image=item

  }

}

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
    "port4.png",
    "port5.png",
    "port6.png"
  ]
  image:string=""
  changeImag(item:string):void{
    this.image=item

  }
next():void{
this.image =this.images[(this.images.indexOf(this.image)+1)%(this.images.length)]

}
prev():void{
  if(this.images.indexOf(this.image)==0){
    this.image =this.images[this.images.length-1]


  }else{
    this.image =this.images[(this.images.indexOf(this.image)-1)]

  }

}
}

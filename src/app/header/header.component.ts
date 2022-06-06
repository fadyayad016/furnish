import { Component, OnInit } from '@angular/core';
import { CartService } from '../ServicesData/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  totalitem:number=0

  constructor( private cartservices:CartService) { }

  ngOnInit(): void {
    this.cartservices.getProducts().subscribe(data=>
      {
        this.totalitem=data.length;

      })
  }

}

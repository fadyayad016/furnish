import { Component, OnInit } from '@angular/core';
import { CartService } from '../ServicesData/cart.service';
import { Iproduct } from '../SharedClasses/shared';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {
  
 public cartlist:any=[];
 public grandTotal !:number;

 product:any;

  constructor( private cartservices:CartService) {
  

   }

  ngOnInit(): void {
    this.cartservices.getProducts().subscribe(data=>
      {
        this.cartlist=data;
       
        this.grandTotal=this.cartservices.gettotalprice();
      })
     
    
  }
  deletee()
  {
    this.cartlist.splice(this.cartlist.indexOf(this.product),1);
    this.cartlist=[...this.cartlist];
  }
  
  removeitem(item:any)
  {
    this.cartservices.removeCartItem(item);
    
  }

  removeCart()
  {
    this.cartservices.removeALLcart();
  }


}

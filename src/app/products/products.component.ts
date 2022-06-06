import { Component, OnInit } from '@angular/core';
import { CartService } from '../ServicesData/cart.service';
import { ProductService } from '../ServicesData/product.service';
import { Iproduct } from '../SharedClasses/shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  constructor( private productservices:ProductService,private cartservices:CartService) {}
   productlist2:any
   errormessage:any

  ngOnInit(): void {
    this.productservices.GetProduct().subscribe(
      data=>
      {
        this.productlist2=data;
        this.productlist2.foreach((a:any)=>{
          Object.assign(a,{Quntity2:1,total:a.Price})

      });
      },
      error=>
      {
        this.errormessage=error;
      }
    )
    
  }
  addtocart(item:any)
  {
    this.cartservices.addtocart(item);

  }

}

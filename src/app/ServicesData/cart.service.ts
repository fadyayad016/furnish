import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public CartItemList:any=[]
  public ProductList=new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
     return this.ProductList.asObservable();
  }
 setproduct(Product:any)
 {
 this.CartItemList.push(Product);
 this.ProductList.next(Product);
 }
 addtocart(Product:any)
 {
   this.CartItemList.push(Product);
   this.ProductList.next(this.CartItemList);
   this. gettotalprice();
   console.log(this.CartItemList);
 }
 gettotalprice():number
 {
   let grandtotal=0;
   this.CartItemList.map((a:any)=>
   {
     grandtotal += a.total;
   })
   return grandtotal;
 }

 
removeCartItem(Product:any)
{
  this.CartItemList.map((a:any,index:any)=>
  {
    if(Product.id===a.id)
    {
      this.CartItemList.splice(index,1);
    }
  })
}
removeALLcart(){
  this.CartItemList=[]
  this.ProductList.next(this.CartItemList);
}
}

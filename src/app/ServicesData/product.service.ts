import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Iproduct } from '../SharedClasses/shared';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { 
  
  }

  
  public _Url="/assets/data/produc.json";
  GetProduct():Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this._Url).pipe(catchError((err)=>
    {
      return throwError(err.message||"Server error")
    })
    )
    
  }
}

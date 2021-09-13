import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, catchError} from 'rxjs/operators'
import { of, Observable, throwError } from 'rxjs';

import { AppConstants} from '../util/constant'

import{ProductCompare, Operation,ProductQuantity} from '../model/model.index'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //urlEndPoint:string="https://tariffcompareapp.herokuapp.com/product/";
  urlEndPoint:string=AppConstants.productPath;
  
  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
 

  constructor(private http:HttpClient) { }


  
  totalProductsPurchased():Observable<ProductQuantity>{
    return this.http.get<ProductQuantity>(this.urlEndPoint+'totalPurchased')
   }
   

   compare(productCompare:ProductCompare):Observable<ProductCompare>{ 
    return this.http.post<ProductCompare>(this.urlEndPoint+'compare',productCompare,{headers:this.httpHeaders});
  }

  purchase(operation:Operation):Observable<Operation>{ 
    return this.http.post<Operation>(this.urlEndPoint+'purchase',operation,{headers:this.httpHeaders});
  }
 
}

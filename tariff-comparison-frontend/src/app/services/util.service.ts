import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { Product } from '../model/model.index';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }

  private productChoosed = new BehaviorSubject<Product>(null);
  
  listenProductChoosed = this.productChoosed.asObservable();

  passProductChoosed(product:Product){
    this.productChoosed.next(product);
  }

}

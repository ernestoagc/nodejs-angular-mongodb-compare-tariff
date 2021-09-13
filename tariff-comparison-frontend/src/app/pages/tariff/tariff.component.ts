import { Component, OnInit } from '@angular/core';
import {ProductCompare,Product, Operation,ProductQuantity} from '../../model/model.index'
@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

  productA:Product;
  productB:Product;
  operation:Operation;
  productQuantity:ProductQuantity;

  constructor() { 
    this.productQuantity= new ProductQuantity();
    
  }


  updateConter(productQuantity){
    this.productQuantity=productQuantity;
    this.productA=null;
    this.productB=null;
  }
  ngOnInit(): void {
  }

  infoCompare(productCompare: ProductCompare) {
    console.log("from the emit");
    console.log(productCompare);


    const {productA,productB} = productCompare;

    this.productA=productA;
    this.productB=productB;

    
    console.log(this.productA);
    console.log(this.productB);


  }

  infoProductChoosed(product:Product){

  }

}

import { Component, OnInit ,Input} from '@angular/core';
import {ProductCompare,Product, Operation,ProductQuantity,} from '../../model/model.index'
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
  productCompare:ProductCompare;

  constructor() { 
    this.productQuantity= new ProductQuantity();
    this.productCompare = new ProductCompare();
  }


  updateConter(productQuantity){
    this.productQuantity=productQuantity;
    this.productA=null;
    this.productB=null;
    this.productCompare = new ProductCompare();
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


}

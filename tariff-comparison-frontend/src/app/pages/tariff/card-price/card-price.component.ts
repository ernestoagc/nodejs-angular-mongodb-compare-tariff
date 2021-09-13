import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Product,Operation} from '../../../model/model.index'
import { UtilService } from 'src/app/services/services.index';
@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input()product:Product;

  @Output() newProductChoosed: EventEmitter<Product> = new EventEmitter();
  title:String;
  constructor(private utilService:UtilService) {
    this.product= new Product();
   }

  ngOnInit(): void {
  }

  productChoosed(){
    console.log("producto elegido");
    console.log(this.product);
    this.utilService.passProductChoosed(this.product);
   //     this.newProductChoosed.emit(this.product);
  }

}

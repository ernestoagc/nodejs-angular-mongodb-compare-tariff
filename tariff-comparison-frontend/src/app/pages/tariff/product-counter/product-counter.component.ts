import { Component, OnInit, Input } from '@angular/core';
import {ProductQuantity} from '../../../model/model.index'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.css']
})
export class ProductCounterComponent implements OnInit {

  @Input()productQuantity: ProductQuantity;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.totalProductsPurchased().subscribe(objTotal =>{
      this.productQuantity=objTotal;
    }  )
  }



  ngOnDestroy() { 
  }

}

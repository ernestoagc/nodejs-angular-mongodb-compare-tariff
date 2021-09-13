import { Component, OnInit ,Output, EventEmitter,Input} from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import {ProductCompare,Product} from '../../../model/model.index'
import swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productCompare:ProductCompare;
  @Output() newProductCompare: EventEmitter<ProductCompare> = new EventEmitter();
 

  constructor(private apiService:ApiService) { 

    this.productCompare = new ProductCompare();
    //this.productCompare.comsumption=0;
  }

  ngOnInit(): void {
  }
  

  doCompareProduct(){

    console.log(this.productCompare.comsumption);

    /*
    if(this.productCompare.comsumption ==undefined || this.productCompare.comsumption==null ){
      swal.fire({
        icon: 'warning',
        title: 'Mandatory field.',
        text: "compsumption value is mandatory"
      });
    }
*/
    
    this.apiService.compare(this.productCompare).subscribe(
      (response)=>{     
        this.newProductCompare.emit(response); 
      },
      ()=>{
  
  
      },
      ()=>{

       // this.currencyExchange = new CurrencyExchange();     
      }
  
    );

  }


}

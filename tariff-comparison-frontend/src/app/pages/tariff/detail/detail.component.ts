import { Component, OnInit ,Output, EventEmitter,Input} from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import {ProductCompare,Product} from '../../../model/model.index'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() productCompare:ProductCompare;
  @Output() newProductCompare: EventEmitter<ProductCompare> = new EventEmitter();
 

  constructor(private apiService:ApiService) { 

    this.productCompare = new ProductCompare();
  }

  ngOnInit(): void {
  }
  

  doCompareProduct(){
 
    
    this.apiService.compare(this.productCompare).subscribe(
      (response)=>{     
        this.newProductCompare.emit(response); 
      },
      ()=>{
  
  
      },
      ()=>{
  
      }
  
    );

  }


}

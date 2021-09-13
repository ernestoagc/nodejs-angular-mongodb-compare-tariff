import { Component, OnInit ,Input,Output,EventEmitter,ViewChild,ElementRef} from '@angular/core';

import {Operation, ProductQuantity} from '../../../model/model.index'
import { UtilService,ApiService } from 'src/app/services/services.index';
import swal from 'sweetalert2'
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private apiService:ApiService,private utilService:UtilService) {this.operation=new Operation(); }
  @Input()operation:Operation;

  @Output() newCounter: EventEmitter<ProductQuantity> = new EventEmitter();
  @ViewChild('closeBtn') closeBtn: ElementRef;
  ngOnInit(): void {
    this.utilService.listenProductChoosed.subscribe(pro =>{
      
      if(pro!=null){

        this.operation=new Operation();
        this.operation.productName=pro.name;
        this.operation.productCode=pro.code;
        this.operation.cost=pro.cost;
        this.operation.comsumption=pro.comsumption;
      }

    });;
  }


  purchaseProduct(){
    this.apiService.purchase(this.operation).subscribe(
      (response)=>{     
      this.apiService.totalProductsPurchased().subscribe(objTotal =>{
        this.newCounter.emit(objTotal);
      }  )
      },
      ()=>{
  
  
      },
      ()=>{
        this.closeBtn.nativeElement.click();

        swal.fire({
          icon: 'success',
          title: 'Successful purcharse',
          text:  `product "${this.operation.productName}" with a cost €${this.operation.cost}`
        });
      }
  
    );
  }
}

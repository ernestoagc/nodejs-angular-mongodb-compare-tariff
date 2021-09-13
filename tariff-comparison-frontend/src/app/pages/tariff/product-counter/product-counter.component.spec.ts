import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCounterComponent } from './product-counter.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProductQuantity} from '../../../model/model.index'
import { ApiService } from 'src/app/services/services.index';
import { Observable ,EMPTY, of} from 'rxjs';  

import { HttpClientModule } from '@angular/common/http';
describe('ProductCounterComponent', () => {
  let component: ProductCounterComponent;
  let fixture: ComponentFixture<ProductCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCounterComponent ],
      providers:[ApiService],
      imports: [ HttpClientModule ,ReactiveFormsModule,FormsModule],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

   
});

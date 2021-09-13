import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ProductCompare,Product} from '../../../model/model.index'
import { HttpClientModule } from '@angular/common/http';
import { CardPriceComponent } from './card-price.component';
import { Observable ,EMPTY, of} from 'rxjs';  
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { By } from '@angular/platform-browser'; 

describe('CardPriceComponent', () => {
  let component: CardPriceComponent;
  let fixture: ComponentFixture<CardPriceComponent>;


  //const serviceApi = new ApiService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPriceComponent ],
      imports: [ HttpClientModule ,ReactiveFormsModule,FormsModule],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  
  


  it('validate show product information', () => {
     

    let product = new Product();
    
    product.cost=800;
    product.comsumption=3500;
    product.recommended=true;


    component.product = product;


    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query( By.css('h1') ).nativeElement;
    console.log("control element");
    console.log(elem);
    expect( elem.innerHTML ).toContain('800');
  });

  it('validate card is putting as featured', () => {

    let product = new Product();
    
    product.cost=800;
    product.comsumption=3500;
    product.recommended=true;

    component.product = product;

    fixture.detectChanges();

    const elem = fixture.debugElement.query( By.css('.recommend-txt') );
      expect( elem ).toBeTruthy();

   
  });

});

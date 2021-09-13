import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import {HttpClientTestingModule,HttpTestingController }from '@angular/common/http/testing';
import { ProductCompare , Product} from '../model/model.index';


describe('ApiService', () => {
  let service: ApiService;
  let httpTestController : HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]


    });
    service = TestBed.inject(ApiService);
  });

  beforeEach(() => {
    service  = TestBed.get(ApiService);
    httpTestController= TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validate invoke api for get compare product information', () => {
    

    let productA: Product = new Product();
    productA.cost=770;
    productA.comsumption=3500;
    productA.recommended=true;

    let productB: Product = new Product();
    productB.cost=800;
    productB.comsumption=3500;
    productB.recommended=false;

    const compareProductObject: ProductCompare = {
     productA:productA,
     productB :productB,
     comsumption:3500
    }

    service.compare(compareProductObject).subscribe((productoCompare) =>{
      expect(productoCompare).toBe(compareProductObject);
    })

    const req = httpTestController.expectOne(service.urlEndPoint+'compare');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(compareProductObject);
    
    //expect(service).toBeTruthy();
  });


});

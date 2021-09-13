import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/services.index';
import swal from 'sweetalert2'
import {ProductCompare,Product} from '../../../model/model.index'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailComponent } from './detail.component';
import { Observable ,EMPTY, of} from 'rxjs';  
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ValidationInterceptor} from '../../../interceptor/validation.interceptor';

import { By } from '@angular/platform-browser'; 

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers:[{
        provide: HTTP_INTERCEPTORS,
        useClass: ValidationInterceptor,
        multi: true
      },ApiService],
      imports: [ HttpClientModule ,ReactiveFormsModule,FormsModule],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() =>{
    swal.close();
  })

  
  it('validate click button return response from api - service',() =>{

    const service = fixture.debugElement.injector.get(ApiService);
    
    let spy_getPosts = spyOn(service,"compare").and.callFake(() => {
      return of(new ProductCompare());
    });

    const inputComsumption = fixture.debugElement.query( By.css('.form-control') ).nativeElement;
    inputComsumption.value="3500";

    fixture.detectChanges();


    const buttonSimulate = fixture.debugElement.query( By.css('.btn-primary') );
 
    buttonSimulate.triggerEventHandler('click', null);
    
    expect( spy_getPosts ).toHaveBeenCalled();

  })



});

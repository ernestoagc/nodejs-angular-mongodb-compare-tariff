import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/services.index';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseComponent } from './purchase.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PurchaseComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseComponent ],
      providers:[ApiService],
      imports: [ HttpClientModule ,ReactiveFormsModule,FormsModule],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComponent } from './tariff.component';

import { NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffComponent 
        ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

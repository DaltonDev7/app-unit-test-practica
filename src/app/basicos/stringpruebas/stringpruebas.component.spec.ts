import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Saludo } from '../helpers/generico.helpers';

import { StringpruebasComponent } from './stringpruebas.component';

describe('StringpruebasComponent', () => {
  let component: StringpruebasComponent;
  let fixture: ComponentFixture<StringpruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringpruebasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringpruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a string', () => {
    const resp = Saludo('Dalton')
    expect( typeof resp).toBe('string')
  })

  it('should return a message with the name given', () => {
    const nombre = 'Dalton'
    const resp = Saludo(nombre)
    expect(resp).toContain(nombre)

    

  })

});

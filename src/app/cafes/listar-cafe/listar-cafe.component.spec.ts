/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarCafeComponent } from './listar-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { faker } from '@faker-js/faker';


describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarCafeComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    const tipos:string[] = ["Interior", "Interior", "Exterior"];
    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe(
          faker.number.int(),
         faker.string.alpha(20),
         faker.string.alpha(20),
         faker.string.alpha(20),
         faker.string.alpha(10),
        faker.number.int(),
        faker.string.alpha(10)
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 

  it('should have 3 <td> tags', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3)
  });
 
  it('should have a thead tag on the tabl', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });
 
 
});

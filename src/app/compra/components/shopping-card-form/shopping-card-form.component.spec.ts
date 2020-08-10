import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardFormComponent } from './shopping-card-form.component';

describe('ShoppingCardFormComponent', () => {
  let component: ShoppingCardFormComponent;
  let fixture: ComponentFixture<ShoppingCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

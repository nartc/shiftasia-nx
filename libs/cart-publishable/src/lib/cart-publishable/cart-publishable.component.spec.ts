import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPublishableComponent } from './cart-publishable.component';

describe('CartPublishableComponent', () => {
  let component: CartPublishableComponent;
  let fixture: ComponentFixture<CartPublishableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPublishableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPublishableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

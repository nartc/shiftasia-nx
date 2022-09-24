import { Component } from '@angular/core';
import { Product } from '@shiftasia-nx/model';

@Component({
  selector: 'shiftasia-nx-cart',
  standalone: true,
  template: `cart works!!!!!!!! for module`,
})
export class CartComponent {
  product: Product = {} as Product;
}

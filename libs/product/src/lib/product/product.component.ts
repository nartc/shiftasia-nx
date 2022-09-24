import { Component } from '@angular/core';
import { Product } from '@shiftasia-nx/model';

@Component({
  selector: 'shiftasia-nx-product',
  standalone: true,
  template: ` <p>product works!!!</p> `,
})
export class ProductComponent {
  product: Product = {} as Product;
}

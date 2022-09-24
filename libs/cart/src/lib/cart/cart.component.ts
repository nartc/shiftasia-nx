import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@shiftasia-nx/auth';
import { Product } from '@shiftasia-nx/model';

@Component({
  selector: 'shiftasia-nx-cart',
  standalone: true,
  template: `
    cart works!!!!!!!! for module
    <pre>{{ user$ | async | json }}</pre>
  `,
  imports: [AsyncPipe, JsonPipe],
})
export class CartComponent {
  product: Product = {} as Product;

  readonly user$ = this.authService.user$;

  constructor(private authService: AuthService) {}
}

import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@shiftasia-nx/auth';
import { Product } from '@shiftasia-nx/model';

@Component({
  selector: 'shiftasia-nx-product',
  standalone: true,
  template: `
    <p>product works!!! module federation!!!</p>
    <pre>{{ user$ | async | json }}</pre>
  `,
  imports: [AsyncPipe, JsonPipe],
})
export class ProductComponent {
  product: Product = {} as Product;

  readonly user$ = this.authService.user$;

  constructor(private authService: AuthService) {}
}

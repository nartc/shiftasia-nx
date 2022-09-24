import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'cart',
        loadComponent: () =>
          import('@shiftasia-nx/cart').then((m) => m.CartComponent),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('@shiftasia-nx/product').then((m) => m.ProductComponent),
      },
    ]),
  ],
}).catch((err) => console.error(err));

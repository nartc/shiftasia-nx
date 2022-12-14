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
        loadChildren: () =>
          import('cart-remote/Routes').then((m) => m.RemoteRoutes),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('product-remote/Routes').then((m) => m.RemoteRoutes),
      },
    ]),
  ],
});

import { Route } from '@angular/router';

export const RemoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@shiftasia-nx/cart').then((m) => m.CartComponent),
  },
];

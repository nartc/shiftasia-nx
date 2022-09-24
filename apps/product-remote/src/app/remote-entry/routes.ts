import { Route } from '@angular/router';

export const RemoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@shiftasia-nx/product').then((m) => m.ProductComponent),
  },
];

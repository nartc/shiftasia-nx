import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterOutlet, RouterLinkWithHref],
  selector: 'shiftasia-nx-root',
  template: `
    <ul>
      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/cart">Cart</a>
      </li>
      <li>
        <a routerLink="/product">Product</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
    <shiftasia-nx-nx-welcome></shiftasia-nx-nx-welcome>
  `,
  styles: [],
})
export class AppComponent {
  title = 'shop';
}

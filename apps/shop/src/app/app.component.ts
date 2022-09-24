import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { AuthService } from '@shiftasia-nx/auth';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterOutlet,
    RouterLinkWithHref,
    NgIf,
    AsyncPipe,
  ],
  selector: 'shiftasia-nx-root',
  template: `
    <ng-container *ngIf="user$ | async as user; else notAuth">
      <p>Welcome {{ user.username }}</p>
      <button type="button" (click)="onSignOut()">Sign Out</button>
    </ng-container>
    <ng-template #notAuth>
      <button type="button" (click)="onSignIn()">Sign In</button>
    </ng-template>
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
  readonly user$ = this.authService.user$;

  constructor(private authService: AuthService) {}

  onSignOut() {
    this.authService.signOut();
  }

  onSignIn() {
    this.authService.signIn();
  }
}

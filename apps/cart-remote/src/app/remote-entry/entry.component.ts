import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterOutlet],
  selector: 'shiftasia-nx-cart-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}

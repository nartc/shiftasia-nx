import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  selector: 'shiftasia-nx-product-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}

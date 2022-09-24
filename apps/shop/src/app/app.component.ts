import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'shiftasia-nx-root',
  template: ` <shiftasia-nx-nx-welcome></shiftasia-nx-nx-welcome> `,
  styles: [],
})
export class AppComponent {
  title = 'shop';
}

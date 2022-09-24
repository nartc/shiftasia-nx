import { Injectable } from '@angular/core';
import { User } from '@shiftasia-nx/model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'platform' })
export class AuthService {
  private readonly user = new BehaviorSubject<User>(null!);

  readonly user$ = this.user.asObservable();
  readonly isLoggedIn$ = this.user$.pipe(map((user) => !!user));

  signIn() {
    this.user.next({ username: 'Chau' });
  }

  signOut() {
    this.user.next(null!);
  }
}

import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth;

  constructor() {
    this.auth = getAuth(); // Obtener la instancia de Auth
  }

  logIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}

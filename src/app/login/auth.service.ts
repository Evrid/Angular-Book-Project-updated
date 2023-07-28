import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode'; // Import jwt_decode

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://redrivertestapi2.azurewebsites.net/'; // Replace with the actual API URL
  private jwtTokenKey = 'jwtToken'; // Key to store the JWT token in local storage

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post(`${this.apiUrl}/api/auth/login`, loginRequest);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.jwtTokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.jwtTokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.jwtTokenKey);
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  logout(): void {
    this.removeToken(); // Remove the JWT token from local storage to log the user out
  }
  
}

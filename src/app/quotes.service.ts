import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../app/login/auth.service';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://redrivertestapi2.azurewebsites.net/api/quotes';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getQuotes(): Observable<Quote[]> {
    const headers = this.getHeaders();
    return this.http.get<Quote[]>(this.apiUrl, { headers });
  }

  addQuote(content: string): Observable<Quote> {
    const headers = this.getHeaders();
    const body = { content };
    return this.http.post<Quote>(this.apiUrl, body, { headers });
  }

  updateQuote(id: number, quote: Quote): Observable<Quote> {
    const headers = this.getHeaders();
    return this.http.put<Quote>(`${this.apiUrl}/${id}`, quote, { headers });
  }

  deleteQuote(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}

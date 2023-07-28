import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from '../quote.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];
  private apiUrl="https://redrivertestapi2.azurewebsites.net/api/quotes";

  constructor(private router: Router,private quotesService: QuotesService,private http: HttpClient,private authService: AuthService) { }

  
  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes(): void {
    this.quotesService.getQuotes().subscribe({
      next: (quotes) => {
        this.quotes = quotes;
      },
      error: (error) => {
        console.error('Error fetching quotes:', error);
      }
    });
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  goHome() {
    this.router.navigateByUrl('');
  }

/*
  addQuote(content: string): Observable<Quote> {
    const headers = this.getHeaders();
    let params = new HttpParams().set('content', content);
    
    console.log(this.apiUrl);
    console.log(content);
    return this.http.post<Quote>(this.apiUrl, null, { headers, params });
}*/
addQuote(content: string, event: Event): void {
  event.preventDefault();

  const headers = this.getHeaders();
  const params = new HttpParams().set('content', content);
  this.http.post<Quote>(this.apiUrl, {}, { headers, params })
    .subscribe({
      next: (quote) => {
        this.quotes.push(quote);
      },
      error: (error) => {
        console.error('Error adding quote:', error);
      }
    });
}



/*
addQuote(content: string): Observable<Quote> {
  const headers = this.getHeaders(); // Get headers including Authorization
  return this.http.post<Quote>(`${this.apiUrl}?content=${content}`, {}, { headers });
}
*/


  updateQuote(id: number, content: string, author: string): void {
    const quoteToUpdate: Quote = { id, content, author };
    this.quotesService.updateQuote(id, quoteToUpdate).subscribe({
      next: (updatedQuote) => {
        const index = this.quotes.findIndex(q => q.id === updatedQuote.id);
        if (index !== -1) {
          this.quotes[index] = updatedQuote;
        }
      },
      error: (error) => {
        console.error('Error updating quote:', error);
      }
    });
  }

  deleteQuote(id: number): void {
    this.quotesService.deleteQuote(id).subscribe({
      next: () => {
        this.quotes = this.quotes.filter(q => q.id !== id);
      },
      error: (error) => {
        console.error('Error deleting quote:', error);
      }
    });
  }
}

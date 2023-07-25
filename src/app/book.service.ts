import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({ 
  providedIn: 'root',
})
export class BookService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(`${this.apiUrl}/books`);
  }
  
  getBookById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/books/${id}`);
  }
  
  addBook(book: any) {
    return this.http.post<any>(`${this.apiUrl}/books`, book);
  }
  
  updateBook(id: number, book: any) {
    return this.http.put<any>(`${this.apiUrl}/books/${id}`, book);
  }
  
  deleteBook(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/books/${id}`);
  }
  
}
import { Component,OnInit } from '@angular/core';

import { BookService } from '../book.service';

import { Router } from '@angular/router';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  isAuthenticated: boolean = false;
  username: string | null = null;

  constructor(private authService: AuthService, private bookService: BookService,private router: Router) {

    const token = this.authService.getToken();
    if (token) {
      this.isAuthenticated = true;
      const decodedToken = this.authService.decodeToken(token); // You need to implement 'decodeToken' method in AuthService
      this.username = decodedToken?.unique_name || null;
    }
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
  }
  
  goToAddPage() {
    this.router.navigateByUrl('/add');
  }

  goToEditPage(bookId: number) {
    this.router.navigateByUrl('/edit/'+bookId);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']); // Navigate to the login page
  }
  
  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe({
      next: () => {
        // Remove the deleted book from the local list
        this.books = this.books.filter((book) => book.id !== bookId);
      },
      error: (error) => {
        console.error('Error deleting book:', error);
      }
    });
  }
  logout(): void {
    this.authService.logout(); // Call the logout method from the AuthService
    this.isAuthenticated = false;
    this.username = null;
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }

  goToQuotes() {
    this.router.navigateByUrl('/quotes');
  }
  
}

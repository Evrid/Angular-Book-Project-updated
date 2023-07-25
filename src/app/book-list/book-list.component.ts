import { Component,OnInit } from '@angular/core';

import { BookService } from '../book.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService,private router: Router) {}

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

  
}

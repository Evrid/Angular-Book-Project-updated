import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})

export class BookEditComponent implements OnInit {
  bookId: number = 0;
  book: any; // Replace 'any' with the interface representing your book model

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookId = Number(params.get('id'));
      this.getBookById(this.bookId);
    });
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
      
    }) ;
  }

  updateBook(): void {
    this.bookService.updateBook(this.bookId, this.book).subscribe({
      next: () => {
        console.log('Book updated successfully!');
        this.router.navigate(['/books']);
      },
      error: (error) => {
        console.error('Error updating book:', error);
      }
    });
  }
  
  

  // Other methods for handling form submission and updating the book
}

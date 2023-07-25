import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {
  newBook: any = {}; // Replace 'any' with the interface representing your book model

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {}

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe({
      next: () => {
        console.log('Book added successfully!');
        this.router.navigate(['/books']);
      },
      error: (error) => {
        console.error('Error adding book:', error);
      }
    });
    
  }
}

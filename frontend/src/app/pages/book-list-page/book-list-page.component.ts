import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.scss',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BookService);
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  delBook(id: number) {
    this.bookService
      .delBook(id)
      .pipe(take(1))
      .subscribe(
        () => {
          this.books = this.books.filter((book) => book.id !== id);
        },
        (error) => {
          console.error('An error occurred at the book deletion :', error);
        }
      );
  }
}

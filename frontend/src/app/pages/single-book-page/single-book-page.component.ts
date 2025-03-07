import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [],
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService
      .getBook(id)
      .pipe(take(1))
      .subscribe((data) => {
        this.book = data;
      });
  }

  noBook() {
    this.router.navigate(['/']);
  }

  delBook(id: number) {
    this.bookService
      .delBook(id)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('An error occurred at the book deletion : ', error);
        }
      );
  }
}

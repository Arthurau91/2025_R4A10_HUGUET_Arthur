import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  bookService: BookService = inject(BookService);

  bookForm: FormGroup = new FormGroup({
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
    ]),
  });

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe({
        next: () => {
          this.bookForm.reset();
        },
        error: (error) => {
          console.error('An error occurred at the book creation : ', error);
        },
      });
    }
  }
}
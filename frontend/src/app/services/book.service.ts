import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, tap, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly API_URL = 'http://localhost:5000';

  constructor(private readonly http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBook(id: number): Observable<Book> {
    return this.http
      .get<Book>(this.API_URL + '/books/' + id)
      .pipe(
        catchError((error) => {
          throw new Error('An error occurred : ', error);
      })
    );
  }

  createBook(book: Book): Observable<{ id: number }> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<{ id: number }>(this.API_URL + '/books', book, { headers })
      .pipe(
        map((data) => ({
          id: data.id,
        })),
        catchError((error) => {
          throw new Error('An error occurred : ', error);
        })
      );
  }

  delBook(id: number): Observable<{ id: number }> {
    return this.http.delete<{ id: number }>(this.API_URL + '/books/' + id).pipe(
      catchError((error) => {
        throw new Error('An error occurred : ', error);
      })
    );
  }
}
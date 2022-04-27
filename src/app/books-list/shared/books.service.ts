import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Books } from './books.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const books = 'https://www.googleapis.com/books/v1/volumes?q=$cat';
    const result = this.http.get<Books>(books).pipe(map((res) => res.items));

    return result;
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book, Books } from '../shared/books.model';
import { BooksService } from '../shared/books.service';
import {
  deleteBook,
  getBooks,
  getBooksSuccess,
} from '../store/books-list.actions';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books$ = this.store.select('books');
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.store.dispatch(getBooks());
  }

  removeTodo(id) {
    console.log(id);
    this.store.dispatch(deleteBook({ id }));
  }
}

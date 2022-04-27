import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Book, Books } from '../shared/books.model';
import { deleteBook, getBooksSuccess } from './books-list.actions';

interface InitialState {
  books: Book[];
}

export const initialState: InitialState = {
  books: [],
};

const _booksReducer = createReducer(
  initialState,
  on(getBooksSuccess, (state, { books }) => {
    console.log(books);
    return {
      ...state,
      books: [...books],
    };
  }),

  on(deleteBook, (state, { id }) => {
    console.log(id, 'AJDI');
    console.log(
      state.books.find((el) => {
        console.log(el.id, id);
      })
    );
    return {
      ...state,
      books: [...state.books.filter((el) => el.id !== id)],
    };
  })
);

export function booksReducer(state, action) {
  return _booksReducer(state, action);
}

import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/books.model';

export const getBooks = createAction(
  '[Books List Component] Get books list from api'
);

export const getBooksSuccess = createAction(
  '[Books List Component] Get Books Success',
  props<{ books: Book[] }>()
);

export const getBooksError = createAction(
  '[Books List Component] Get Books Error',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books list] Delete book from list',
  props<{ id: string }>()
);

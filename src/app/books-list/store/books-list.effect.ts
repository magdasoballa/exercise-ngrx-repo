import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../shared/books.service';
import { getBooks, getBooksError, getBooksSuccess } from './books-list.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks),
      mergeMap(() => {
        return this.booksService.getBooks().pipe(
          map((books) => getBooksSuccess({ books })),
          catchError((error) => {
            getBooksError({ error });

            return EMPTY;
          })
        );
      })
    )
  );
  constructor(private actions$: Actions, private booksService: BooksService) {}
}

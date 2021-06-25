import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as NewArticleActions from '../../actions/new-article/new-article.actions';
import { getNewArticle } from '../../selectors/new-article/new-article.selectors';

@Injectable()
export class NewArticleEffects {

  loadNewArticles$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NewArticleActions.newArticle),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}

}

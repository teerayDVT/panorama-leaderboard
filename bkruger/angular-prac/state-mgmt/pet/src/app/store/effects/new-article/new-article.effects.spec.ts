import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NewArticleEffects } from './new-article.effects';

describe('NewArticleEffects', () => {
  let actions$: Observable<any>;
  let effects: NewArticleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewArticleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NewArticleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

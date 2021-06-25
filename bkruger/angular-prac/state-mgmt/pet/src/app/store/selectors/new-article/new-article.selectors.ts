import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNewArticle from '../../reducers/new-article/new-article.reducer';

export const getNewArticleState = createFeatureSelector<fromNewArticle.NewArticleState>(
  fromNewArticle.newArticleFeatureKey
);

export const getNewArticle = createSelector(
  getNewArticleState,
  state => state
);

export const getTldr = createSelector(
  getNewArticle,
  state => state.tldr
);

export const getContent = createSelector(
  getNewArticle,
  state => state.content
);

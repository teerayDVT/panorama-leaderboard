import * as fromNewArticle from '../reducers/new-article.reducer';
import { selectNewArticleState } from './new-article.selectors';

describe('NewArticle Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNewArticleState({
      [fromNewArticle.newArticleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

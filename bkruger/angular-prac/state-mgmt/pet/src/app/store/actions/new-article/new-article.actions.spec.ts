import * as fromNewArticle from './new-article.actions';

describe('newArticleNewArticles', () => {
  it('should return an action', () => {
    expect(fromNewArticle.newArticleNewArticles().type).toBe('[NewArticle] NewArticle NewArticles');
  });
});

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article/article';
import { toggleDarkTheme } from 'src/app/store/actions/dark-theme/darktheme.actions';
import { NewArticleState } from 'src/app/store/reducers/new-article/new-article.reducer';
import { selectDarkTheme } from 'src/app/store/selectors/dark-theme/darktheme.selectors';
import { getNewArticle } from 'src/app/store/selectors/new-article/new-article.selectors';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article$?: Observable<Article>;
  article?: Article;

  darkTheme$ = this.store.select(selectDarkTheme);
  darkTheme = true;

  constructor(
    private store: Store<NewArticleState>
  ) { }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(getNewArticle));
    // this.store.select(getNewArticle).subscribe(
      // article => this.article$ = article
    // );
    // this.article$?.subscribe(article => this.article = article);
  }

  toggleDarkTheme(){
    this.store.dispatch(toggleDarkTheme());
    this.darkTheme$.subscribe(darkTheme => this.darkTheme = darkTheme);
  }
}

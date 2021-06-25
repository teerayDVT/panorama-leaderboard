import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article/article';
import { NewArticleState } from 'src/app/store/reducers/new-article/new-article.reducer';
import { getNewArticle } from 'src/app/store/selectors/new-article/new-article.selectors';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  article$?: Observable<Article>;

  constructor(
    private store: Store<NewArticleState>
  ) { }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(getNewArticle));
  }

}

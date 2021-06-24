import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDarkTheme } from 'src/app/store/actions/darktheme.actions';
import { selectDarkTheme } from 'src/app/store/selectors/darktheme.selectors';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  darkTheme$ = this.store.select(selectDarkTheme);
  darkTheme = true;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  toggleDarkTheme(){
    this.store.dispatch(toggleDarkTheme());
    this.darkTheme$.subscribe(darkTheme => this.darkTheme = darkTheme);
  }
}

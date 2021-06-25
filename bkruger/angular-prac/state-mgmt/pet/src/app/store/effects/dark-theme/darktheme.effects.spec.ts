import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DarkthemeEffects } from './darktheme.effects';

describe('DarkthemeEffects', () => {
  let actions$: Observable<any>;
  let effects: DarkthemeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DarkthemeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DarkthemeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

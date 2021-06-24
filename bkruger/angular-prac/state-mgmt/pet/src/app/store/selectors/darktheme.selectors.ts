import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DarkThemeState, darkThemeFeatureKey } from '../reducers/darktheme.reducer';

export const selectDarkThemeState = createFeatureSelector<DarkThemeState>(
  darkThemeFeatureKey
);

export const selectDarkTheme = createSelector(
  selectDarkThemeState,
  (state: DarkThemeState) => state.darkTheme
);
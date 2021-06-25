import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DarkThemeState, darkThemeFeatureKey } from '../../reducers/dark-theme/darktheme.reducer';

export const selectDarkThemeState = createFeatureSelector<DarkThemeState>(
  darkThemeFeatureKey
);

export const selectDarkTheme = createSelector(
  selectDarkThemeState,
  (state: DarkThemeState) => state.darkTheme
);
import { createReducer, on } from '@ngrx/store';
import * as DarkthemeActions from '../actions/darktheme.actions';

export const darkThemeFeatureKey = 'darkTheme';

export interface DarkThemeState {
  darkTheme: boolean
}

export const initialState: DarkThemeState = {
  darkTheme: true
};

export const darkThemeReducer = createReducer(
  initialState,
  on(DarkthemeActions.toggleDarkTheme, state => ({...state, darkTheme: !state.darkTheme})),
);


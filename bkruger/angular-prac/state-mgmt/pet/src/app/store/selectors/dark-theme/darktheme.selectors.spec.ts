import * as fromDarktheme from '../../reducers/dark-theme/darktheme.reducer'
import { selectDarkThemeState } from './darktheme.selectors';

describe('Darktheme Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDarkThemeState({
      [fromDarktheme.darkThemeFeatureKey]: {}
    });

    expect(result).toEqual({darkTheme:true});
  });
});

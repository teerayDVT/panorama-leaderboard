import * as fromDarktheme from './darktheme.actions';

describe('themeDarkthemes', () => {
  it('should return an action', () => {
    expect(fromDarktheme.toggleDarkTheme().type).toBe('[Darktheme] Theme Darkthemes');
  });
});

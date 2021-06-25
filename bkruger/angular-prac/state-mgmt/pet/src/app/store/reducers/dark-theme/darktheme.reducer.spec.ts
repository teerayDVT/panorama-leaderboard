import { darkThemeReducer, initialState } from './darktheme.reducer';

describe('Darktheme Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = darkThemeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

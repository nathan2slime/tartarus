import { createReducer } from '@reduxjs/toolkit';
import { ThemeState } from '../../models/theme.model';

import { setThemeAction } from '../actions/theme.actions';

const INITIAL: ThemeState = {
  data: 'dark',
};

export default createReducer(INITIAL, {
  [setThemeAction.type]: (___, action) => ({ data: action.payload }),
});

import { Theme } from '../types';

import { dark } from './dark';

export const light: Theme = {
  ...dark,
  primaryColorUp: '#405def',
  primaryColorDown: '#2c43f4',
  backgroundColor: '#f4f4f4',
  foregroundColorUp: '#f2f6ff',
  textColorUp: '#e6e9ed',
  textColorDown: '#0f111c',
  foregroundColorDown: '#FFFFFF',
  borderColor: '#cfd0d1',
};

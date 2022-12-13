import { createReducer } from '@reduxjs/toolkit';

import { StatesState } from '../../services/models/states.model';
import { setStatesAction } from '../actions/states.actions';

const INITIAL: StatesState = [];

export default createReducer(INITIAL, {
  [setStatesAction.type]: (__, action) => action.payload,
});

import { createReducer } from '@reduxjs/toolkit';

import {
  setCountiesAction,
  setCurrentCountyAction,
} from '../actions/counties.actions';
import { CountiesState } from '../../models/counties.model';

const INITIAL: CountiesState = {
  data: [],
};

export default createReducer(INITIAL, {
  [setCountiesAction.type]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [setCurrentCountyAction.type]: (state, action) => ({
    ...state,
    currentCounty: action.payload,
  }),
});

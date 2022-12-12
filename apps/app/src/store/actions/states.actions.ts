import { createAction } from '@reduxjs/toolkit';

import { StatesState } from '../../models/states.model';

export const setStatesAction = createAction<StatesState, string>('setState');

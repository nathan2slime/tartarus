import { createAction } from '@reduxjs/toolkit';

import { StatesState } from '../../services/models/states.model';

export const setStatesAction = createAction<StatesState, string>('setState');

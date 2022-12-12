import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { CountiesState } from '../models/counties.model';
import { StatesState } from '../models/states.model';
import { ThemeState } from '../models/theme.model';

import countiesReducer from './reducers/counties.reducer';
import statesReducer from './reducers/states.reducer';
import themeReducer from './reducers/theme.reducer';

export type AppState = {
  states: StatesState;
  counties: CountiesState;
  theme: ThemeState;
};

const persistConfig: PersistConfig<any> = {
  key: 'app',
  storage,
  whitelist: ['states', 'theme'],
};

const reducer = persistReducer<AppState>(
  persistConfig,
  combineReducers({
    states: statesReducer,
    counties: countiesReducer,
    theme: themeReducer,
  })
);

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

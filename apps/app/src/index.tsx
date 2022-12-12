import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import App from './app';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store';

const wrapper = document.getElementById('app') as HTMLElement;

const app = createRoot(wrapper);

app.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

reportWebVitals();

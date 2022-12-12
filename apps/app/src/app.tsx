import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { TarThemeProvider } from '@tar/core';
import { ThemeProvider } from 'styled-components';

import themes from '@tar/themes';

import router from './router/router';
import GlobalStyle from './global';
import { AppState } from './store';

const App = () => {
  const theme = useSelector((state: AppState) => state.theme.data);
  const appTheme = themes[theme];

  return (
    <TarThemeProvider theme={appTheme}>
      <ThemeProvider theme={appTheme}>
        <RouterProvider router={router} />

        <GlobalStyle />
      </ThemeProvider>
    </TarThemeProvider>
  );
};

export default App;

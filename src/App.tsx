import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

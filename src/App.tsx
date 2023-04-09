import { RepositoriesProvider } from '@contexts/Repositories';
import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <RepositoriesProvider>
        <AppRoutes />
      </RepositoriesProvider>
    </ThemeProvider>
  );
};

export default App;

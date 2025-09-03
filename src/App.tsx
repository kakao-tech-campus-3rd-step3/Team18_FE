import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div/>
    </ThemeProvider>
  );
}

export default App;

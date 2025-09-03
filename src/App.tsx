import { Routes } from './pages/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

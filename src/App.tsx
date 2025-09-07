import { Routes } from './pages/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { Navigation } from '@/shared/components/Navigation';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation role='president' />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

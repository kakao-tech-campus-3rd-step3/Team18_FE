import { Routes } from './pages/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar role='guest' />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

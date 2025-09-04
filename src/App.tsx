import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

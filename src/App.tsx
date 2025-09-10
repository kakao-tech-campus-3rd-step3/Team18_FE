import { Routes } from './pages/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { Navigation } from '@/shared/components/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navigation role='president' />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

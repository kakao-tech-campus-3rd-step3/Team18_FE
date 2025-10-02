import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/shared/components/Navigation';
import { theme } from '@/styles/theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navigation role='president' />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

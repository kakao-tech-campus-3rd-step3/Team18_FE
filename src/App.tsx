import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navigation } from '@/shared/components/Navigation';
import { theme } from '@/styles/theme';
import { UserProvider } from './providers/auth';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <ToastContainer />
          <Navigation role='president' />
          <Outlet />
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const ToastContainer = () => (
  <Toaster
    position='top-center'
    richColors
    toastOptions={{
      style: {
        borderRadius: theme.radius.md,
        padding: '12px 20px',
        fontWeight: theme.font.weight.bold,
        fontSize: theme.font.size.base,
        boxShadow: theme.shadow.md,
      },
    }}
  />
);

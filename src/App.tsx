import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { UserProvider } from '@/app/providers/auth';
import { theme } from '@/app/styles/theme';
import { Navigation } from '@/shared/components/Navigation';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { AppContainer, MainContent } from './app/styles/Layout/App.styled';
import Footer from './shared/components/Footer';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

const queryClient = new QueryClient();

const GA_TRACKING_ID = 'G-WVZCKKQ8HQ';

export function App() {
  const location = useLocation();

  useEffect(() => {
    if (!window.window.GA_INITIALIZED) {
      ReactGA.initialize(GA_TRACKING_ID);
      window.window.GA_INITIALIZED = true;
    }

    ReactGA.set({ page: location.pathname });
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <ScrollToTop />
          <ToastContainer />
          <Navigation />
          <AppContainer>
            <MainContent>
              <Outlet />
            </MainContent>
            <Footer />
          </AppContainer>
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

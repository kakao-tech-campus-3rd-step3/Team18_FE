import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset-css/reset.css';
import '@/index.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from '@/pages/Routes.tsx';
import { theme } from '@/styles/theme';

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { client } = await import('@/mocks/client');
    return client.start({});
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ToastProvider />
      <RouterProvider router={router} />
    </StrictMode>,
  );
});

export const ToastProvider = () => (
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

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset-css/reset.css';
import '@/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/pages/Routes.tsx';

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { client } = await import('@/app/mocks/client');
    return client.start({});
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});

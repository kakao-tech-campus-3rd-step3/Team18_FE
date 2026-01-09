import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset-css/reset.css';
import '@/index.css';
import TagManager from 'react-gtm-module';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/pages/Routes.tsx';

const tagManagerArgs = {
  gtmId: 'GTM-MTNVTX87',
};

TagManager.initialize(tagManagerArgs);

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

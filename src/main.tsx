import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset-css/reset.css';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { client } = await import('@/mocks/client');
    return client.start({});
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});

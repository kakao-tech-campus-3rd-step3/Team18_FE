import react from '@vitejs/plugin-react';
import { loadEnv, type ConfigEnv } from 'vite';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [
      react({
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};

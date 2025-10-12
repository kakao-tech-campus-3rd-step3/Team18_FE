import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type ConfigEnv } from 'vite';

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

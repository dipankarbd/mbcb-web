import { defineConfig } from 'cypress';
import config from './src/config.json';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  env: {
    baseApi: config.baseApi,
  },
});

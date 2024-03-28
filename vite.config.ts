import { defineConfig } from 'vite';

import { vitePluginForArco } from '@arco-plugins/vite-react';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginForArco()],
});

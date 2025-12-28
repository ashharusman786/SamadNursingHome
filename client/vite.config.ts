import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';
import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// Plugin to copy SEO files from seo/ to dist root
function copySeoFiles() {
  return {
    name: 'copy-seo-files',
    writeBundle() {
      const seoDir = resolve(__dirname, 'seo');
      const outDir = resolve(__dirname, 'dist');
      ['robots.txt', 'sitemap.xml'].forEach(file => {
        const src = join(seoDir, file);
        const dest = join(outDir, file);
        if (existsSync(src)) {
          copyFileSync(src, dest);
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Samad Nursing Home',
        short_name: 'SamadNH',
        description: 'Compassionate care for your loved ones',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    copySeoFiles(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: mode !== 'production',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['@tanstack/react-query'],
          ui: [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            'lucide-react',
            'class-variance-authority',
            'tailwind-merge',
          ],
        },
      },
    },
  },
  define: {
    'process.env': {},
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
}));
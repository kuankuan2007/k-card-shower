import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginLegacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './src/types/auto-imports.d.ts',
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: './temp/test.html',
      open: true,
    }),
    vitePluginLegacy({
      targets: ['defaults', 'chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 81,
  },
  preview: {
    port: 82,
    host: '0.0.0.0',
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        hoist_funs: true,
      },
      format: {
        beautify: false,
        inline_script: false,
        max_line_len: 500,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
        },
        entryFileNames: 'script/[name]-[hash].js',
        chunkFileNames() {
          return 'script/[name]-[hash].js';
        },
        assetFileNames(chunkInfo) {
          if (chunkInfo.source === '/* vite internal call, ignore */') {
            return chunkInfo.name || 'assets/[name]-[hash].[ext]';
          }
          const extToDir = {
            script: ['.js'],
            style: ['.css'],
            font: ['.ttf', '.woff', '.woff2', '.eot', '.otf'],
            img: ['.png', '.jpg', '.svg', '.gif'],
          };

          for (const i in extToDir) {
            if (
              extToDir[i as keyof typeof extToDir].some((ext) =>
                chunkInfo.name?.toLowerCase().endsWith(ext)
              )
            ) {
              return `${i}/[name]-[hash].[ext]`;
            }
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
});

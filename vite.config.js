import laravel from 'laravel-vite-plugin';
import {defineConfig} from 'vite';
import importDynamicModule from 'vite-plugin-dynamic-import-module';

export default defineConfig({
     plugins: [
          laravel([
               'resources/js/app.jsx',
          ]),
          importDynamicModule(),
     ],
     resolve: {
          alias: {
               '@': '/resources/js'
          }
     }
});

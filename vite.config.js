import laravel from 'laravel-vite-plugin';
import {defineConfig} from 'vite';
import importDynamicModule from 'vite-plugin-dynamic-import-module';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
     plugins: [
          laravel([
               'resources/js/app.jsx',
               'resources/js/user.jsx',
               'resources/js/admin.jsx',
          ]),
          importDynamicModule(),
          reactRefresh(),
     ],
     resolve: {
          alias: {
               '@': '/resources/js'
          }
     }
});

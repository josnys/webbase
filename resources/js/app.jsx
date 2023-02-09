import './bootstrap';
import '../css/app.css';

import React from 'react';
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Web Base';

createInertiaApp({
     title: title => `${title} - ${appName}`,
     progress: {
          color: '#4B5563',
     },
     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
     setup({ el, App, props }) {
          const root = createRoot(el);
          root.render(
               <StrictMode>
                    <App {...props} />
               </StrictMode>
          );
     },
});

import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import { Ziggy } from './route';
// import * as Sentry from '@sentry/browser';
//
// Sentry.init({
//   dsn: process.env.MIX_SENTRY_LARAVEL_DSN
// });

try {
     // window.Popper = require('popper.js').default;
     // window.$ = window.jQuery = require('jquery');
     require('./bootstrap');
     // require('bootstrap');
} catch (e) {}

const app = document.getElementById('app');

render(
     <InertiaApp
          initialPage={JSON.parse(app.dataset.page)}
          resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
     />,
     app
);

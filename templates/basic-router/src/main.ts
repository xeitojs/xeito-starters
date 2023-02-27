import './style.scss';
import { Xeito } from '@xeito/core';
import { AppComponent } from './app/app-component';
import { XeitoRouterPlugin } from '@xeito/router';
import { HomePage } from './app/pages/home/home-page';

// Create a new Xeito app instance
const app = new Xeito(AppComponent);

// Add Xeito Router
app.usePlugin(XeitoRouterPlugin, {
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
})

// Bootstrap the app
app.bootstrap('#app');


import { Xeito } from '@xeito/core';
import { XeitoRouterPlugin } from '@xeito/router';
import { AppComponent } from './app/app-component';
import { routerConfig } from './router-config';
import './styles.scss';

// Create a new Xeito app and pass in the root component
const app = new Xeito(AppComponent);

// Use the router plugin and pass in the router config
app.usePlugin(XeitoRouterPlugin, routerConfig);

// Mount the app to the DOM
app.bootstrap('#app');
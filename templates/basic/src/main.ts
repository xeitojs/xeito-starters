import './style.scss'
import { Xeito } from '@xeito/core';
import { AppComponent } from './app/app-component';

// Create a new Xeito app instance
const app = new Xeito(AppComponent);

// Bootstrap the app
app.bootstrap('#app');


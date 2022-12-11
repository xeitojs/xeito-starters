import { RouterOptions } from '@xeito/router';
import { HomePage } from './app/pages/home/home-component';

export const routerConfig: RouterOptions = {
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
};

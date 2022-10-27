import { RouterConfig } from '@xeito/router';
import { HomePage } from './app/pages/home/home-component';

export const routerConfig: RouterConfig = {
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
};

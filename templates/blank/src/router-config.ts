import { RouterConfig } from '@xeito/router';
import { HomePage } from './app/pages/home/home';

export const routerConfig: RouterConfig = {
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
};

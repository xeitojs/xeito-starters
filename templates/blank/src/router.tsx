import { Xeito } from '@xeito/core';
import { createRouterConfig } from '@xeito/router';
import { RouterConfig } from '@xeito/router';
import { HomePage } from './app/pages/home/Home';

export const RouterConfiguration: RouterConfig = createRouterConfig([
  {
    path: '/',
    component: <HomePage />
  }
]);

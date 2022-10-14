import { createRouterConfig } from '@xeito/router';
import { RouterConfig } from '@xeito/router';
import { HomePage } from './pages/home/Home';

export RouterConfiguration: RouterConfig = createRouterConfig([
  {
    path: '/',
    component: <HomePage/>
  }
]);

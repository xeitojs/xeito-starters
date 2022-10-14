import { Xeito } from '@xeito/core';
import { createRouterConfig, Router, RouterConfig } from "@xeito/router";
import './styles.scss';
import { HomePage } from './app/pages/home/Home';
import { AboutPage } from './app/pages/about/About';

const routerConfig: RouterConfig = createRouterConfig([
  {
    path: "/",
    component: <HomePage/>
  },
  {
    path: "/about",
    component: <AboutPage/>
  },
  {
    path: '(.*)',
    redirectTo: '/about'
  }
]);

Xeito.render(document.getElementById("app"), <Router routerConfig={routerConfig} />);
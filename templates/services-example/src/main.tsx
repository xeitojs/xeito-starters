import { Xeito } from '@xeito/core';
import { Router } from '@xeito/router';
import { routerConfig } from './router-config';
import './styles.scss';

Xeito.render(document.getElementById('app'), <Router routerConfig={routerConfig} />);
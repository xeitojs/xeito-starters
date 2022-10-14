import { Xeito } from '@xeito/core';
import { Router } from '@xeito/router';
import './styles.scss';
import { RouterConfiguration } from './router';

Xeito.render(document.getElementById("app"), <Router routerConfig={RouterConfiguration} />);
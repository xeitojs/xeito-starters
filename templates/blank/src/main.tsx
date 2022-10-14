import { Xeito } from '@xeito/core';
import './styles.scss';
import { RouterConfiguration } from '@xeito/router';

Xeito.render(document.getElementById("app"), <Router routerConfig={RouterConfiguration} />);
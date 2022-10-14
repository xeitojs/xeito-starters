import { Xeito, Component } from '@xeito/core';
import classes from './about.module.scss';

@Component()
export class AboutPage {

  constructor() {}

  render() {
    return (
      <div>
        <p className={classes.redAccent}>About works!</p>
      </div>
    );
  }

}

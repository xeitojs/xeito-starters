import { Xeito, Component } from '@xeito/core';
import styles from './home.module.scss';

@Component()
export class HomePage {

  constructor() {}

  render() {
    return (
      <div>
        <p className={styles.redAccent}>Home works!</p>
      </div>
    );
  }

}

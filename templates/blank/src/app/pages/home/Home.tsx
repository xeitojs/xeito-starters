import { Xeito, Component, State } from '@xeito/core';
import styles from './home.module.scss';

@Component()
export class HomePage {

  @State() count = 0;

  constructor() {}

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1>Xeito</h1>

            <button 
              className={styles.button}
              onClick={() => this.count++}
            >
              Count is: {this.count}
            </button>

            <p>Edit <span className={styles.mono}>/app/pages/Home.tsx</span> to test livereload</p>
            
            <div className={styles.link}>
              <a href="https://github.com/aerotoad/xeito" target="_blank" className={styles.link}>Xeito Github repo</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

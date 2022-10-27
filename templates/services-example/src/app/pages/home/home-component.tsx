import { Xeito, Component, State } from '@xeito/core';
import { Inject } from '@xeito/injection';
import { ExampleService } from '../../services/example-service';
import styles from './home.module.scss';
import { Subscription } from 'rxjs';

@Component()
export class HomePage {

  @Inject() exampleService: ExampleService;
  @State() count: number = 0;
  @State() greet: string = '';

  private countSubscription: Subscription;

  constructor() {}

  onCreate() {
    this.exampleService.startAutomaticCount();
    this.countSubscription = this.exampleService.$count.subscribe((count: number) => {
      this.count = count;
    });
  }

  onDestroy() {
    this.countSubscription.unsubscribe();
  }

  keyDown(e) {
    this.greet = this.exampleService.greetMe(e.target.value);
  }

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1>Xeito</h1>

            {this.greet && <h2>{this.greet}</h2>}

            <input type="text" onInput={(e) => this.keyDown(e)} />
            <button className={styles.button}>Greet me</button>

            <button className={styles.button}>
              Count is: {this.count}
            </button>

            <p>Edit <span className={styles.mono}>/app/pages/home/home-component.tsx</span> to test livereload</p>
            
            <div className={styles.link}>
              <a href="https://github.com/aerotoad/xeito" target="_blank" className={styles.link}>Xeito Github repo</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

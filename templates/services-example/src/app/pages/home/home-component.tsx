import { Xeito, Component, State } from '@xeito/core';
import { Inject } from '@xeito/injection';
import { ExampleService } from '../../services/example-service';
import styles from './home.module.scss';
import { Subscription } from 'rxjs';

@Component()
export class HomePage {

  @Inject() exampleService: ExampleService;
  @State() count: number = 0;
  @State() greet: string | null = '';

  private countSubscription: Subscription;

  constructor() {
    this.exampleService.startAutomaticCount();
  }

  onCreate() {
    this.countSubscription = this.exampleService.$count.subscribe((count: number) => {
      this.count = count;
    });
  }

  onDestroy() {
    this.countSubscription.unsubscribe();
  }

  keyDown(e) {
    const greet = this.exampleService.greetMe(e.target.value);
    this.greet = greet;
  }

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1>Xeito</h1>

            <div className={styles.inputBlock}>
              { this.greet ? <h2>{this.greet}</h2> : null}
              { !this.greet ? <h2>Enter your name</h2> : null }

              <input type="text" placeholder="What's your name?" onInput={(e) => this.keyDown(e)} />
            </div>

            <div className={styles.autoCounter}>
              <div className={styles.text}>
                Count is: {this.count}
              </div>
            </div>

            <p>Edit <span className={styles.mono}>/app/pages/home/home-component.tsx</span> to test livereload</p>
            
            <div className={styles.links}>
              <a href="https://github.com/aerotoad/xeito" target="_blank" className={styles.link}>Xeito Github</a>
              <span className={styles.divider}>|</span>
              <a href="https://aerotoad.github.io/xeito-docs" target="_blank" className={styles.link}>Xeito Docs</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

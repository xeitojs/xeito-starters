import { Inject } from '@xeito/injection';
import { XeitoComponent, Component, html, State } from '@xeito/core';
import styles from './home.module.scss';
import { ExampleService } from '../../services/example-service';

@Component({
  selector: 'app-home',
})
export class HomePage extends XeitoComponent {

  @State() count: number = 0;
  @Inject() exampleService: ExampleService;

  onCreate() {
    this.exampleService.startAutomaticCount();
    this.exampleService.$count.subscribe(count => {
      this.count = count;
    });
  }

  render() {
    return html`
      <div>
        <div class=${styles.wrapper}>
          <div class=${styles.container}>
            <h1>Xeito</h1>

            <button 
              class=${styles.button}
            >
              Count is: ${this.count}
            </button>

            <p>Edit <span class=${styles.mono}>/app/pages/home/home-component.tsx</span> to test livereload</p>
            
            <div class=${styles.links}>
              <a href="https://github.com/aerotoad/xeito" target="_blank" class=${styles.link}>Xeito Github</a>
              <span class=${styles.divider}>|</span>
              <a href="https://aerotoad.github.io/xeito-docs" target="_blank" class=${styles.link}>Xeito Docs</a>
            </div>
          </div>
        </div>
      </div>
    `
  }

}

import { XeitoComponent, Component, html, State } from '@xeito/core';
import { Inject } from '@xeito/injection';
import { WriteStore } from '@xeito/store';
import styles from './home.module.scss';
import { ExampleService } from '../../services/example-service';

@Component({
  selector: 'app-home',
  services: [ExampleService]
})
export class HomePage extends XeitoComponent {

  @State() $count: WriteStore<number>;
  @Inject() exampleService: ExampleService;

  onInit() {
    this.exampleService.startAutomaticCount();
    this.$count = this.exampleService.$count;
  }

  render() {
    return html`
      <div>
        <div class=${styles.wrapper}>
          <div class=${styles.container}>

            <img src="https://xeito.dev/images/logo_gradient.svg" style="height:7em" />
            <h1>Xeito Framework</h1>

            <button 
              class=${styles.button}
            >
              Count is: ${this.$count.value}
            </button>

            <p>Edit <span class=${styles.mono}>/app/pages/home/home-component.tsx</span> to test livereload</p>
            
            <div class=${styles.links}>
              <a href="https://github.com/aerotoad/xeito/" target="_blank" class=${styles.link}>Xeito Github</a>
              <span class=${styles.divider}>|</span>
              <a href="https://xeito.dev/" target="_blank" class=${styles.link}>Documentation</a>
            </div>
          </div>
        </div>
      </div>
    `
  }

}

import { XeitoComponent, Component, html, State } from '@xeito/core';
import styles from './home.module.scss';

@Component({
  selector: 'app-home',
})
export class HomePage extends XeitoComponent {

  @State() count: number = 0;

  increment() {
    this.count++;
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
              @click=${this.increment}
            >
              Count is: ${this.count}
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
